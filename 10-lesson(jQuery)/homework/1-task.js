//Create a rectangle and make it move to all edges of the page after a button has been clicked

$(document).ready(() => {
  let steps = [
    { left: "80%" },
    { top: "60%" },
    { left: "10px" },
    { top: "10px" },
  ];
  let stepIndex = 0;

  $(".btn").click(() => {
    const step = steps[stepIndex];
    $(".rectangle").animate(step, 1000, () => {
      stepIndex = (stepIndex + 1) % steps.length;
    });
  });
});

// $(document).ready(() => {
//   $(".btn").click((e) => {
//     $(".rectangle")
//       .animate({ left: "80%" }, 1000)
//       .animate({ top: "60%" }, 1000)
//       .animate({ left: "10px" }, 1000)
//       .animate({ top: "10px" }, 1000);
//   });
// });
