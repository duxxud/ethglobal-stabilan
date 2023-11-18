import { Card, FlexCol, ImageWrapper, Typography } from "lib";

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
  const tokens = [
    {
      name: "Uniswap v3",
      icon: "https://app.nexusmutual.io/logos/uniswapv2.svg",
    },
    {
      name: "Goldfinch",
      icon: "https://app.nexusmutual.io/logos/goldfinch.svg",
    },
    {
      name: "Oneinch",
      icon: "https://app.nexusmutual.io/logos/oneinch.svg",
    },
    {
      name: "Beefy",
      icon: "https://app.nexusmutual.io/logos/beefy.svg",
    },
  ];

  return (
    <div>
      <FlexCol className="mb-12 gap-5">
        <Typography type="h2">Dashboard</Typography>
        <Typography type="meta">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          cumque in dolorum exercitationem
        </Typography>
      </FlexCol>

      <Card size="big">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Token
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Until
                </th>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token, index) => (
                <tr
                  key={index}
                  className="bg-white dark:bg-gray-800 border-b border-dashed border-[rgba(145,158,171,0.2)] "
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                    <ImageWrapper
                      src={token.icon}
                      alt={token.name}
                      width="30"
                      height="30"
                      className="mr-2"
                    />
                    {token.name}
                  </td>
                  <td className="px-6 py-4">{getRandomBalance()} Tokens</td>
                  <td className="px-6 py-4">{getRandomDate()}</td>
                  <td className="px-6 py-4">
                    <button className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center">
                      Claim
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
