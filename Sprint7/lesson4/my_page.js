// Insert rule to Style in the head section in HTML page
/*
    We insert the style directly to HTML head section
    .sheet is the property of the <style> element that provide access to the CSSStyleSheet
    .insertRule method is a method of CSSStyleSheet object that allows you to add a new CSS rule to the stylesheet
    It takes two arguments:
        The first argument contains a complete and valid CSS rule:
            "element id or class{ attribute: value; attribute: value }"
        Second argument is the index at which to insert the rule.
            The index is based on the current number of rules in the stylesheet
*/
const body = document.body;
const section = document.getElementById("section");
const head = document.head;
const style = document.createElement("style");
head.appendChild(style);
style.sheet.insertRule("*{ margin: 0;}", 0);
style.sheet.insertRule("nav{width: 15vw;height: 100vh;position: relative;background-color: aqua;}", 1);
style.sheet.insertRule("#add-section{position: inherit;display: flex;}", 2);
style.sheet.insertRule("#addBtn{position: relative;left: 2.5vw;cursor: pointer;}", 3);
style.sheet.insertRule(".page{position: relative;padding: 3vh 0 3vh 1vw;background-color: aqua;top: 8vh;}", 4);
style.sheet.insertRule(".show{background-color: white;}", 5);
style.sheet.insertRule("#top-corner-outer{width: 5vw;height: 10.2vh;position: absolute;top: -30px;right: -25px;background-color: white;}", 6);
style.sheet.insertRule("#top-corner-inner{width: 5vw;height: 4.95vh;position: absolute;top: -30px;right: 0;border-radius: 25px 0 50px 25px;background-color: aqua;}", 7);
style.sheet.insertRule("#bottom-corner-outer{z-index: 1;width: 5vw;height: 9.95vh;position: absolute;bottom: -30px;right: -25px;background-color: white;}", 8);
style.sheet.insertRule("#bottom-corner-inner{z-index: 1;width: 5vw;height: 4.95vh;position: absolute;bottom: -30px;right: 0;border-radius: 25px 50px 0 25px;background-color: aqua;}", 9);

// Create add page button
const addBtn = document.getElementById("addBtn");
addBtn.setAttribute("onclick", "addPage()");

function addPage(){
    const page_name = document.querySelector("#page_name");
    const new_page = document.createElement("div");
    new_page.classList.add("page"); // Add relevant class name
    new_page.setAttribute("onclick", "selectedPage(this)"); //Make the page clickable
    new_page.innerText = page_name.value; //Add page name
    section.appendChild(new_page);
    page_name.value = "";
}

// Selecting page
function selectedPage(element){
    // Remove the corner and name from the selected page
    if(section.querySelector(".show")){
        const prevPage = section.querySelector(".show");
        prevPage.classList.remove("show");
        // Remove the corner
        for(let i = prevPage.children.length - 1; i >= 0; i--){
            let child = prevPage.children[i];
            prevPage.removeChild(child);
        }
    }
    /*
        Modify corner of the selected page to highlight it
        Create corner and add specific id to it.
        Add the corner to the selected page
    */
    element.classList.add("show");
    const top_corner_outer = document.createElement("div");
    top_corner_outer.setAttribute("id", "top-corner-outer");
    const top_corner_inner = document.createElement("div");
    top_corner_inner.setAttribute("id", "top-corner-inner");
    const bottom_corner_outer = document.createElement("div");
    bottom_corner_outer.setAttribute("id", "bottom-corner-outer");
    const bottom_corner_inner = document.createElement("div");
    bottom_corner_inner.setAttribute("id", "bottom-corner-inner");
    element.appendChild(top_corner_outer);
    element.appendChild(top_corner_inner);
    element.appendChild(bottom_corner_outer);
    element.appendChild(bottom_corner_inner);
}
