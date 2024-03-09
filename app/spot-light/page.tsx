"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ChangeEvent, MouseEvent, useState } from "react";
import { usePageTitle } from "use-custom-hook-react";

const SpotLight = () => {
  usePageTitle("Spot Light");
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let spotSize = useMotionValue(100);
  let [color, setColor] = useState("#ffff");

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    let { left, top } = currentTarget.getBoundingClientRect();
    // console.log("{ left, top }:", { left, top });

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleTouchMove = (e: any) => {
    // console.log("e:", e);
    // let { left, top } = currentTarget.getBoundingClientRect();
    // mouseX.set(clientX - left);
    // mouseY.set(clientY - top);
  };

  const handleMouseLeave = () => {
    mouseX.set(spotSize.get());
    mouseY.set(spotSize.get());
  };

  const onSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    spotSize.set(Number(value));
  };

  const onColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setColor(value);
  };

  return (
    <motion.div
      className="t-flex t-gap-4 t-flex-col sm:t-flex-row"
      layout
      initial={{ y: 200 }}
      animate={{
        y: 0,
      }}
      transition={{
        type: "spring",
        mass: 1,
        damping: 30,
        stiffness: 200,
      }}
    >
      <div className="t-flex t-gap-4 t-h-max sm:t-flex-col t-flex-row">
        <label htmlFor="size">Spot size</label>
        <input
          type="number"
          onChange={onSizeChange}
          id="sixe"
          defaultValue={spotSize.get()}
        />

        <label htmlFor="color">Spot color</label>
        <input type="color" onChange={onColorChange} value={color} />
      </div>
      <div className="t-bg-black t-h-full t-text-black t-rounded-lg">
        <motion.div
          className="t-max-h-screen t-text-black t-p-10 t-overflow-y-auto"
          style={{
            background: useMotionTemplate`
             radial-gradient(
               ${spotSize}px circle at ${mouseX}px ${mouseY}px,
               ${color},
               transparent 100%
             )
           `,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            purus porta, porta dolor vel, pulvinar turpis. Suspendisse aliquam
            placerat turpis, sed ullamcorper nisl vestibulum eu. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec euismod tempor
            elit a pulvinar. Integer vehicula purus ipsum, id ultricies risus
            placerat sit amet. Cras vel ante egestas diam egestas sagittis.
            Mauris facilisis, dolor pulvinar tempus vestibulum, elit lectus
            gravida sem, sed volutpat dui dolor vel purus. Praesent nec ligula
            ac mi faucibus hendrerit vitae sed felis. Nullam vehicula magna
            vitae ultrices dapibus. Pellentesque facilisis dui a diam
            scelerisque pharetra. Vestibulum dapibus imperdiet molestie. Fusce
            fringilla facilisis metus, in iaculis lectus fermentum eget. Ut
            tortor quam, imperdiet sit amet nisi in, fringilla porta sapien.
            Aenean a enim vestibulum, bibendum dolor sed, consequat mi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            purus porta, porta dolor vel, pulvinar turpis. Suspendisse aliquam
            placerat turpis, sed ullamcorper nisl vestibulum eu. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec euismod tempor
            elit a pulvinar. Integer vehicula purus ipsum, id ultricies risus
            placerat sit amet. Cras vel ante egestas diam egestas sagittis.
            Mauris facilisis, dolor pulvinar tempus vestibulum, elit lectus
            gravida sem, sed volutpat dui dolor vel purus. Praesent nec ligula
            ac mi faucibus hendrerit vitae sed felis. Nullam vehicula magna
            vitae ultrices dapibus. Pellentesque facilisis dui a diam
            scelerisque pharetra. Vestibulum dapibus imperdiet molestie. Fusce
            fringilla facilisis metus, in iaculis lectus fermentum eget. Ut
            tortor quam, imperdiet sit amet nisi in, fringilla porta sapien.
            Aenean a enim vestibulum, bibendum dolor sed, consequat mi.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            purus porta, porta dolor vel, pulvinar turpis. Suspendisse aliquam
            placerat turpis, sed ullamcorper nisl vestibulum eu. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec euismod tempor
            elit a pulvinar. Integer vehicula purus ipsum, id ultricies risus
            placerat sit amet. Cras vel ante egestas diam egestas sagittis.
            Mauris facilisis, dolor pulvinar tempus vestibulum, elit lectus
            gravida sem, sed volutpat dui dolor vel purus. Praesent nec ligula
            ac mi faucibus hendrerit vitae sed felis. Nullam vehicula magna
            vitae ultrices dapibus. Pellentesque facilisis dui a diam
            scelerisque pharetra. Vestibulum dapibus imperdiet molestie. Fusce
            fringilla facilisis metus, in iaculis lectus fermentum eget. Ut
            tortor quam, imperdiet sit amet nisi in, fringilla porta sapien.
            Aenean a enim vestibulum, bibendum dolor sed, consequat mi.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            purus porta, porta dolor vel, pulvinar turpis. Suspendisse aliquam
            placerat turpis, sed ullamcorper nisl vestibulum eu. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec euismod tempor
            elit a pulvinar. Integer vehicula purus ipsum, id ultricies risus
            placerat sit amet. Cras vel ante egestas diam egestas sagittis.
            Mauris facilisis, dolor pulvinar tempus vestibulum, elit lectus
            gravida sem, sed volutpat dui dolor vel purus. Praesent nec ligula
            ac mi faucibus hendrerit vitae sed felis. Nullam vehicula magna
            vitae ultrices dapibus. Pellentesque facilisis dui a diam
            scelerisque pharetra. Vestibulum dapibus imperdiet molestie. Fusce
            fringilla facilisis metus, in iaculis lectus fermentum eget. Ut
            tortor quam, imperdiet sit amet nisi in, fringilla porta sapien.
            Aenean a enim vestibulum, bibendum dolor sed, consequat mi.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            purus porta, porta dolor vel, pulvinar turpis. Suspendisse aliquam
            placerat turpis, sed ullamcorper nisl vestibulum eu. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec euismod tempor
            elit a pulvinar. Integer vehicula purus ipsum, id ultricies risus
            placerat sit amet. Cras vel ante egestas diam egestas sagittis.
            Mauris facilisis, dolor pulvinar tempus vestibulum, elit lectus
            gravida sem, sed volutpat dui dolor vel purus. Praesent nec ligula
            ac mi faucibus hendrerit vitae sed felis. Nullam vehicula magna
            vitae ultrices dapibus. Pellentesque facilisis dui a diam
            scelerisque pharetra. Vestibulum dapibus imperdiet molestie. Fusce
            fringilla facilisis metus, in iaculis lectus fermentum eget. Ut
            tortor quam, imperdiet sit amet nisi in, fringilla porta sapien.
            Aenean a enim vestibulum, bibendum dolor sed, consequat mi.
          </p>
          <p>
            Fusce faucibus nulla id iaculis sagittis. Duis ac arcu a ex
            elementum feugiat. Proin ut quam quis tortor vulputate semper a id
            nunc. Morbi rhoncus ultricies ultricies. Praesent semper id massa
            sed euismod. Fusce sagittis felis nec libero malesuada, in luctus
            enim aliquam. Aliquam sagittis, orci eget blandit vestibulum, mi dui
            blandit mauris, et tincidunt tellus nisi sagittis lacus. Sed
            dignissim, sapien vitae cursus imperdiet, augue massa tempor ex, non
            finibus risus metus ac enim. Mauris blandit eros nisi.
          </p>
          <p>
            Sed bibendum ante ac metus hendrerit, nec commodo tortor venenatis.
            Pellentesque porta eros non eros cursus, vitae commodo sapien
            facilisis. Praesent sit amet volutpat lacus. Nullam sed quam ac
            dolor blandit lacinia. Ut euismod turpis sit amet libero pulvinar,
            non aliquet lacus bibendum. Nullam libero massa, facilisis sed neque
            id, porta fringilla eros. Curabitur vestibulum nisi nec tempor
            tempor. Sed fermentum mauris diam, eu volutpat magna tempus et. Ut
            semper dapibus purus eget ullamcorper. Aenean varius rutrum purus id
            congue. Mauris sit amet turpis ornare, pharetra ex et, porta lorem.
            In hac habitasse platea dictumst.
          </p>
          <p>
            Nulla sed pellentesque nibh, eu consectetur neque. Curabitur eu
            risus at felis sagittis blandit. Nunc non massa non massa mattis
            semper. Curabitur dapibus tortor velit, id tincidunt ligula rutrum
            sed. Quisque feugiat consequat molestie. Curabitur lobortis neque ac
            porta imperdiet. Sed malesuada nibh sit amet magna commodo, sed
            bibendum turpis vestibulum. Suspendisse vel rutrum dolor, sed
            bibendum turpis. Morbi condimentum fermentum urna id venenatis.
          </p>
          <p>
            Nulla sed pellentesque nibh, eu consectetur neque. Curabitur eu
            risus at felis sagittis blandit. Nunc non massa non massa mattis
            semper. Curabitur dapibus tortor velit, id tincidunt ligula rutrum
            sed. Quisque feugiat consequat molestie. Curabitur lobortis neque ac
            porta imperdiet. Sed malesuada nibh sit amet magna commodo, sed
            bibendum turpis vestibulum. Suspendisse vel rutrum dolor, sed
            bibendum turpis. Morbi condimentum fermentum urna id venenatis.
          </p>{" "}
          <p>
            Nulla sed pellentesque nibh, eu consectetur neque. Curabitur eu
            risus at felis sagittis blandit. Nunc non massa non massa mattis
            semper. Curabitur dapibus tortor velit, id tincidunt ligula rutrum
            sed. Quisque feugiat consequat molestie. Curabitur lobortis neque ac
            porta imperdiet. Sed malesuada nibh sit amet magna commodo, sed
            bibendum turpis vestibulum. Suspendisse vel rutrum dolor, sed
            bibendum turpis. Morbi condimentum fermentum urna id venenatis.
          </p>{" "}
          <p>
            Nulla sed pellentesque nibh, eu consectetur neque. Curabitur eu
            risus at felis sagittis blandit. Nunc non massa non massa mattis
            semper. Curabitur dapibus tortor velit, id tincidunt ligula rutrum
            sed. Quisque feugiat consequat molestie. Curabitur lobortis neque ac
            porta imperdiet. Sed malesuada nibh sit amet magna commodo, sed
            bibendum turpis vestibulum. Suspendisse vel rutrum dolor, sed
            bibendum turpis. Morbi condimentum fermentum urna id venenatis.
          </p>{" "}
          <p>
            Nulla sed pellentesque nibh, eu consectetur neque. Curabitur eu
            risus at felis sagittis blandit. Nunc non massa non massa mattis
            semper. Curabitur dapibus tortor velit, id tincidunt ligula rutrum
            sed. Quisque feugiat consequat molestie. Curabitur lobortis neque ac
            porta imperdiet. Sed malesuada nibh sit amet magna commodo, sed
            bibendum turpis vestibulum. Suspendisse vel rutrum dolor, sed
            bibendum turpis. Morbi condimentum fermentum urna id venenatis.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SpotLight;
