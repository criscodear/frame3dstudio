import { MadeWithDyad } from "@/components/made-with-dyad";
import CenteredButton from "@/components/CenteredButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex-grow flex items-center justify-center w-full">
        <CenteredButton />
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;