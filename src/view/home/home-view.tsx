import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function HomeView() {

  return <section className="p-4">
    <article className="flex gap-2">
      <Select>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="Options" defaultValue="GET" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="GET">
            GET
          </SelectItem>
          <SelectItem value="POST">
            POST
          </SelectItem>
        </SelectContent>
      </Select>
      <Input />
      <Button>
        Send
      </Button>
    </article>
  </section>;
}