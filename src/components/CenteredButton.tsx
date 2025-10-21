import React from "react";
import { Button } from "@/components/ui/button";
import { showSuccess } from "@/utils/toast";

const CenteredButton: React.FC = () => {
  const handleClick = () => {
    showSuccess("Botão clicado!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <Button onClick={handleClick} className="px-8 py-4 text-lg">
        Clique Aqui
      </Button>
    </div>
  );
};

export default CenteredButton;