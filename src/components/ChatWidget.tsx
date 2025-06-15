
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const ChatWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        size="icon"
        className="rounded-full h-14 w-14 bg-brand-blue-700 hover:bg-brand-blue-800 shadow-lg animate-float"
        aria-label="Open chat"
      >
        <MessageSquare className="h-7 w-7" />
      </Button>
      <div className="absolute top-0 right-0 -mt-1 -mr-1">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow-400"></span>
        </span>
      </div>
    </div>
  );
};

export default ChatWidget;

