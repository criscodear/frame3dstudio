import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { showSuccess } from "@/utils/toast";

const FetchDataButton: React.FC = () => {
  const queryClient = useQueryClient();

  const handleClick = () => {
    queryClient.invalidateQueries({ queryKey: ["posts"] });
    showSuccess("Dados atualizados!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <Button onClick={handleClick} className="px-8 py-4 text-lg">
        Atualizar Dados
      </Button>
    </div>
  );
};

export default FetchDataButton;