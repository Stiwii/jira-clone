"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import DottedSeparator from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useInviteCode } from "../hooks/use-invite-code";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { useJoinWorkspace } from "../api/use-join-workspace";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  };
}

export const JoinWorkspaceForm = ({
  initialValues,
}: JoinWorkspaceFormProps) => {
  const route = useRouter();
  const workspaceId = useWorkspaceId();
  const inviteCode = useInviteCode();
  const { mutate, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    mutate(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          route.push(`/workspaces/${data.$id}`);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="pt-7">
        <CardTitle className="text-xl font-bold">Join workspace</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          You&apos;ve been invited to join <strong>{initialValues.name}</strong>{" "}
          workspace.
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <div className="flex flex-col lg:flex-row gap-y-2 items-center justify-between">
          <Button
            size={"lg"}
            variant="secondary"
            type="button"
            asChild
            className="w-full lg:w-fit"
            disabled={isPending}
          >
            <Link href="/">Cancel</Link>
          </Button>
          <Button
            size="lg"
            type="button"
            className="w-full lg:w-fit"
            onClick={onSubmit}
            disabled={isPending}
          >
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
