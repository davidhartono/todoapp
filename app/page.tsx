import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center justify-self-center w-lg py-24">
      <div className="flex flex-col items-center gap-8 w-full mb-10">
        <h1 className="text-5xl font-bold">Sign In</h1>
        <p className="text-neutral-500">
          Just sign in if you have an account in here. Enjoy our website :)
        </p>
      </div>
      <div className="flex flex-col w-full items-center gap-5 relative p-8 rounded-3xl shadow-md">
        <div className="relative w-full">
          <Label
            htmlFor="email"
            className="text-sm px-1 absolute left-3 bg-white -top-3 text-blue-400 font-normal"
          >
            Email
          </Label>
          <Input
            type="text"
            id="email"
            placeholder=""
            className="border bg-white text-sm border-blue-400 py-6 rounded-lg px-4"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="password"
            className="text-sm px-1 absolute left-3 bg-white -top-3 text-blue-400 font-normal"
          >
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder=""
            className="border bg-white text-sm border-blue-400 py-6 rounded-lg px-4"
          />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-1.5 items-center">
            <Checkbox
              id="remember"
              className="data-[state=checked]:bg-blue-600 data-[state=checked]:text-white border-1 border-neutral-400 data-[state=checked]:border-blue-600"
            />
            <Label htmlFor="remember" className="text-sm font-normal">
              Remember Me
            </Label>
          </div>
          <div className="flex">
            <Button
              variant="link"
              className="text-sm font-normal text-blue-400"
            >
              Forgot Password
            </Button>
          </div>
        </div>
        <div className="w-full">
          <Button className="w-full h-12 bg-blue-500 text-white rounded-lg text-xs">
            Login
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-5 text-blue-500">
        <span className="text-sm font-normal">Don&apos;t have an account?</span>
        <Button
          variant="link"
          className="text-sm font-medium text-blue-500 -ml-3"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
