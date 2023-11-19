"use client";

import { Card, FlexCol, Typography } from "lib";
import { FirstTable } from "./firstTable/FirstTable";
import { SecondTable } from "./secondTable/SecondTable";

function getRandomBalance() {
  return (Math.random() * 100).toFixed(2);
}

function getRandomDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toLocaleDateString();
}

export default function Page() {
  return (
    <div>
      <FlexCol className="mb-12 gap-5">
        <Typography type="h2">Dashboard</Typography>
        <Typography type="meta">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          cumque in dolorum exercitationem
        </Typography>
      </FlexCol>

      <FlexCol className="gap-8 mb-4">
        <Card size="big">
          <FirstTable />
        </Card>
        <Card size="big">
          <SecondTable />
        </Card>
      </FlexCol>
    </div>
  );
}
