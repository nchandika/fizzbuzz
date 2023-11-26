for (let x = 1; x <= 100; x++) {
  console.log(
    Array.from(
      {
        length:
          Math.max(
            Math.floor(Math.abs(Math.sin((4 * Math.PI * (x - 3 / 2)) / 12))) *
              4,
            Math.floor(Math.abs(Math.cos((4 * Math.PI * (x - 5)) / 20))) * 8
          ) -
          Math.max(
            Math.floor(Math.abs(Math.cos((4 * Math.PI * (x - 3)) / 12))) * 4 -
              4,
            Math.floor(Math.abs(Math.sin((4 * Math.PI * (x - 5 / 2)) / 20))) *
              8 -
              Math.floor(Math.abs(Math.cos((4 * Math.PI * (x - 3)) / 12))) * 4 -
              4,
            0
          ),
      },
      (_, i) =>
        Math.max(
          Math.floor(Math.abs(Math.sin((4 * Math.PI * (x - 3 / 2)) / 12))) * 4 -
            4,
          Math.floor(Math.abs(Math.sin((4 * Math.PI * (x - 5 / 2)) / 20))) * 8 -
            Math.floor(Math.abs(Math.cos((4 * Math.PI * (x - 3)) / 12))) * 4 -
            4,
          0
        ) + i
    )
      .map((x) =>
        String.fromCharCode(
          Math.round(
            (53 * x ** 7) / 420 -
              (539 * x ** 6) / 180 +
              (83 * x ** 5) / 3 -
              (4507 * x ** 4) / 36 +
              (5717 * x ** 3) / 20 -
              (13694 * x ** 2) / 45 +
              (853 * x) / 7 +
              102
          )
        )
      )
      .join("") || x
  );
}