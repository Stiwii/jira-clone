"use client";

import { ResponsiveModal } from "@/components/responsive-modal";

import { CreateWorkspaceForm } from "./create-workspace-form";

import { useCreateWorkspaceModal } from "../hooks/use-create-workspaces-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen, close } = useCreateWorkspaceModal();
  return (
    <ResponsiveModal
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(false);
      }}
    >
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  );
};
