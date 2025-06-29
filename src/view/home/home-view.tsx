import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function HomeView() {

  return <section className="container mx-auto p-4">
    <article className="flex">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Options" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    <Input />
    </article>
  </section>;
}