import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse px-6 gap-12">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Indonesia", imageSrc: "/ID.svg" }}
          hearts={3}
          points={100}
          hasActiveSubscription={true}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Indonesian" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
