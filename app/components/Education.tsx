import { educationType } from "../types";

export const Education = ({ career, years, description }: educationType) => {
  return (
    <div>
      <h3 className="text-xl inline text-gray-800">{career}</h3>
      <span className="text-sm text-gray-500"> ({years})</span>
      <p className="text-lg text-gray-500">{description}</p>
    </div>
  );
};
