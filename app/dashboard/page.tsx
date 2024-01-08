import Dropzone from '@/components/Dropzone';
import { db } from '@/firebase';
import { auth } from '@clerk/nextjs';
import { collection, getDocs } from 'firebase/firestore';
import { FileType } from '@/typings';
import TableWrapper from '@/components/table/TableWrapper';

const DashboardPage = async () => {
  const { userId } = auth();

  const docResults = await getDocs(collection(db, 'users', userId!, 'files'));
  const skeletonFiles: FileType[] = docResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullname: doc.data().fullname,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));

  return (
    <div className="border-t">
      <Dropzone />

      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
