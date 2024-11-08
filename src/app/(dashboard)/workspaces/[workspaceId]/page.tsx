import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdPage = async ({ params }: WorkspaceIdPageProps) => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");
  return (
    <div>
      <h1>Workspace id: {params.workspaceId}</h1>
    </div>
  );
};

export default WorkspaceIdPage;
