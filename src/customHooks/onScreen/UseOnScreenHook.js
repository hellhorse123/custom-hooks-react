import { useRef } from "react";

import useOnScreen from "./useOnScreen";

export default function UseOnScreenHook() {
  const headerTwoRef = useRef();
  const visible = useOnScreen(headerTwoRef, "-100px");

  return (
    <div>
      <h1>Header 1</h1>
      <div>
        Id ullamco consequat ullamco veniam nisi ad amet duis eu eiusmod est
        cillum eiusmod esse. Duis laboris veniam labore pariatur excepteur ut
        voluptate labore sit. Cupidatat dolore veniam labore est aliquip
        consectetur ex id ut est cillum quis ea. Aliquip enim adipisicing amet
        sint nulla veniam minim amet ex cillum quis non. Nisi commodo labore
        laboris aliqua et pariatur elit qui cupidatat duis. Et mollit culpa
        labore cillum consectetur ex reprehenderit ut. Aute dolore anim
        consequat ex duis nulla. Velit minim ut incididunt sit cupidatat dolore
        voluptate. Fugiat eu esse consectetur sit incididunt dolore esse eiusmod
        in nulla officia consequat est laboris. Esse exercitation enim ullamco
        do aute ad deserunt reprehenderit adipisicing exercitation. Ad id eu
        aliquip id. In elit excepteur laboris elit ad laborum in. Aliqua commodo
        excepteur sint aute do fugiat velit dolor fugiat elit veniam. Qui
        nostrud voluptate cupidatat voluptate et deserunt aute deserunt est
        culpa commodo qui. Dolor laboris excepteur est est. Laboris sit
        cupidatat nulla esse nostrud dolore sit eu deserunt mollit veniam irure.
        Aute est officia occaecat velit labore voluptate. Irure eiusmod culpa
        nisi sit amet ullamco tempor irure qui sit officia amet. Laboris quis
        pariatur ad culpa laborum.
      </div>

      <h1 ref={headerTwoRef}>Header 2 {visible && "(VISIBLE)"}</h1>
      <div>
        Id ullamco consequat ullamco veniam nisi ad amet duis eu eiusmod est
        cillum eiusmod esse. Duis laboris veniam labore pariatur excepteur ut
        voluptate labore sit. Cupidatat dolore veniam labore est aliquip
        consectetur ex id ut est cillum quis ea. Aliquip enim adipisicing amet
        sint nulla veniam minim amet ex cillum quis non. Nisi commodo labore
        laboris aliqua et pariatur elit qui cupidatat duis. Et mollit culpa
        labore cillum consectetur ex reprehenderit ut. Aute dolore anim
        consequat ex duis nulla. Velit minim ut incididunt sit cupidatat dolore
        voluptate. Fugiat eu esse consectetur sit incididunt dolore esse eiusmod
        in nulla officia consequat est laboris. Esse exercitation enim ullamco
        do aute ad deserunt reprehenderit adipisicing exercitation. Ad id eu
        aliquip id. In elit excepteur laboris elit ad laborum in. Aliqua commodo
        excepteur sint aute do fugiat velit dolor fugiat elit veniam. Qui
        nostrud voluptate cupidatat voluptate et deserunt aute deserunt est
        culpa commodo qui. Dolor laboris excepteur est est. Laboris sit
        cupidatat nulla esse nostrud dolore sit eu deserunt mollit veniam irure.
        Aute est officia occaecat velit labore voluptate. Irure eiusmod culpa
        nisi sit amet ullamco tempor irure qui sit officia amet. Laboris quis
        pariatur ad culpa laborum.
      </div>

    </div>
  );
}

// хук запускает какой-либо код, когда компонент видим на экране
