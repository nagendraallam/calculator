import Buttons from "../components/Buttons";
import { ButtonLayout } from "../configs";

export default function DisplayButtons(props) {
  return ButtonLayout.map((_, index) => {
    if (index % 4 === 0) {
      return (
        <tr key={index}>
          {[1, 2, 3, 4].map((_, i) => {
            return (
              <td key={i}>
                <Buttons
                  height={props.buttonHeight}
                  width={props.buttonWidth}
                  text={ButtonLayout[index + i]}
                />
              </td>
            );
          })}
        </tr>
      );
    }
  });
}
