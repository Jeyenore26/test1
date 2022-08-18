export default function (context) {
  console.log("Not auth");
  try {
    if (localStorage) {
      context.redirect("/mainpage");
    }
  } catch (e) {
    console.log("Not auth");
    console.log(e);
  }
}
