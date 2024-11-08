import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { MembersList } from "@/features/workspaces/components/members-list";

interface MembersPageProps {
  params: {
    workspaceId: string;
  };
}

const MembersPage = async ({}: MembersPageProps) => {
  const user = await getCurrent();
  if (!user) return redirect("/sign-in");

  return (
    <div className="w-full lg:max-w-xl">
      <MembersList />
    </div>
  );
};

export default MembersPage;
