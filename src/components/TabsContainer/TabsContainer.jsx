import { useState } from "react";
import { Description } from "../Description/Description";
import { Reviews } from "../Reviews/Reviews";
import {
  DescriptionBtn,
  InfoWrap,
  ReviewsBtn,
  TabButtonsWrap,
} from "./TabsContainer.Styled";

export const TabsContainer = () => {
  const [tab, settab] = useState("Description");
  return (
    <InfoWrap>
      <TabButtonsWrap>
        <DescriptionBtn
          type="button"
          aria-label="Description button"
          onClick={() => settab("Description")}
          $tab={tab}
        >
          Description
        </DescriptionBtn>
        <ReviewsBtn
          type="button"
          aria-label="Reviews button"
          onClick={() => settab("Reviews")}
          $tab={tab}
        >
          Reviews
        </ReviewsBtn>
      </TabButtonsWrap>
      {tab === "Description" ? <Description /> : <Reviews />}
    </InfoWrap>
  );
};
