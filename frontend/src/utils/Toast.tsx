import { toast } from "sonner";
import Button from "./Button";

export function Toast({ title }: any) {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast(title, {
          description: new Date().toLocaleTimeString(),
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
