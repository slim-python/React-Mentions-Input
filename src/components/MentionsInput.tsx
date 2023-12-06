import React, { useEffect, useRef, useState } from "react";
import { setCaretToEnd, createSpanDiv } from "./utils";
import "./MentionsInput.css";

interface MentionsInputPropType {
  data: any;
  trigger: string;
}
function MentionsInput(props: MentionsInputPropType) {
  const { data: UsersList, trigger } = props;
  const [showSuggestion, setShowSuggestion] = useState(false);
  const main_text_area = document.getElementById("main-text-area");
  const main_text_areaRef = useRef(null);
  const handleSuggestionClick = (name: string, id: number) => {
    createSpanDiv(name, main_text_area);
    setCaretToEnd(main_text_areaRef?.current);
    // @ts-ignore
    const childNodes: any = Array.from(main_text_areaRef?.current?.childNodes);

    childNodes.forEach((node: any) => {
      if (node.nodeType !== Node.TEXT_NODE) return;
      const text = node.textContent;
      const replacedText = text.replace(
        new RegExp(`${trigger}(\\w+)`, "g"),
        ""
      );
      node.textContent = replacedText;
    });

    setShowSuggestion(false);
  };
  useEffect(() => {
    if (!main_text_areaRef?.current) return;
    const main_text_area: any = main_text_areaRef?.current;
    const inputVal: any = document.getElementById("MentionInputMainDiv");

    main_text_area?.setAttribute("tabindex", 1);
    main_text_area?.focus();

    // Function to handle keyup event
    const handleKeyUp = (e: any) => {
      const inputText = e?.target?.innerText;

      const atIndex = inputText.lastIndexOf(trigger);
      const showSuggestion =
        atIndex !== -1 &&
        inputText.substring(atIndex + 1).split(" ")[0].length > 2;
      setShowSuggestion(showSuggestion);
    };

    // Add event listener
    inputVal.addEventListener("keyup", handleKeyUp);

    // Cleanup function to remove event listener
    return () => inputVal.removeEventListener("keyup", handleKeyUp);
  }, [main_text_areaRef?.current]);

  return (
    <div className="">
      <div className="w-full h-fit" id="MentionInputMainDiv">
        {showSuggestion && (
          <section className="flex flex-col m-2 my-2 bg-white px-2 py-3 rounded-lg transition-all ease-in-out duration-500">
            <div className="max-h-36 overflow-y-scroll">
              {UsersList &&
                UsersList.length > 0 &&
                UsersList.map((user: any, index: number) => (
                  <div
                    className={`flex justify-start items-center p-2 space-x-1 cursor-pointer hover:bg-gray-200  ${
                      index === 4 || index === UsersList.length - 1
                        ? ``
                        : `border-b-[1.5px]`
                    } transition-all ease-in-out duration-500 focus:bg-[#c4c4c4] `}
                    key={index}
                    onClick={() => {
                      handleSuggestionClick(user.name, user.id);
                    }}
                  >
                    <img
                      className="h-6 w-6 rounded-full object-cover"
                      src={user?.userAvatar}
                      alt={user?.name}
                    />
                    <p className="overflow-x-hidden">{user.name}</p>
                  </div>
                ))}
            </div>
          </section>
        )}
        <div className="">
          <div
            className="border-2 border-gray-400 focus:outline-none px-3 py-2 rounded-lg"
            role="textbox"
            aria-multiline="true"
            spellCheck="true"
            id="main-text-area"
            ref={main_text_areaRef}
            contentEditable="true"
            dir="ltr"
            placeholder="Type Somehting here ...."
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MentionsInput;
