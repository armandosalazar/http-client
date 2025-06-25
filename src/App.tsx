import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function App() {
  return <main className="p-4">
    <div>
      <div className="flex">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Input />
      </div>
      <h1>Hollaa</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A exercitationem consectetur natus sit vero laboriosam fuga quos atque quam tenetur ullam ipsa totam ea, fugiat amet eum! Cum, molestias reprehenderit!</p>
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div></main>
}

export default App;
