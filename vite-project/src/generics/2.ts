type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, "name" | "color" | "position" | "weight">
>(top: T, bottom: T): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log(
  compare(
    { name: "A", color: "red", position: 1, weight: 10 },
    { name: "B", color: "blue", position: 2, weight: 20 }
  )
);
