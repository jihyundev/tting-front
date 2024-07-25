import {auth} from "@/auth";
import {IntroCard} from "@/components/intro-card";
import {IdeaList} from "@/components/idea-list";

export default async function Page() {
    const session = await auth();

    if (session?.user) {
        return (
            <div className="flex justify-center items-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 py-12">
                <IdeaList />
            </div>
        )
    }

  return (
    <>
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex justify-center items-center">
                <IntroCard />
            </div>
        </div>
    </>
  );
}
