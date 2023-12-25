const Item = document.querySelector("#item");
        const addBtn = document.querySelector("#sub-btn");
        let Unorderlist = document.querySelector("#unordered");
        const SubHeading = document.querySelector("#subheading");

        addBtn.addEventListener("click", () => {
            let value = Item.value;
            if (value === "") {
                alert("Please Enter the Task");
            } else {
                let creatingLiTag = document.createElement("li");
                creatingLiTag.innerText = value;
                Unorderlist.appendChild(creatingLiTag);

                let span = document.createElement("span");
                span.innerHTML = "<i class='fas fa-trash'></i>";
                creatingLiTag.appendChild(span);

                span.addEventListener("click", function () {
                    let listItem = this.parentNode;
                    listItem.parentNode.removeChild(listItem);
                });
            }
            Item.value = "";
            Item.focus();
        });