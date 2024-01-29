import React from "react";

interface ImgProps {
  name: string;
  height: string;
}

export const ImgHandler: React.FC<ImgProps> = ({ name, height }) => {
  const h = height + "px";
  if (name === "Gryffindor") {
    return (
      <img
        alt="그리핀도르"
        src="https://i.namu.wiki/i/iztIztG2wYZlyAkgXfwjscBOs1EroRJsO91khg67jQqP_VRAeHKHHRGTSWViH-lUqaG2ldcX6QtIVIQ6RORioh1OJgzuOzPepx0dy1dviwMGjiTNPna8-q4C-BmlgUNJpWoKl3486-AYhv3qWPiF3w.webp"
        height={h}
      />
    );
  } else if (name === "Ravenclaw") {
    return (
      <img
        alt="레번클로"
        src="https://i.namu.wiki/i/wQTykYMBl4qeUZywSJBOoj8nrU3HzatBx4twA8oHlI9DgGlqaL9xdyxxisI1290hBzJf86kKuyB33JQ8jsstQxfOvDQd7HlPS9o1ryE1K9sK_o2q8w6xc5OJKIbln87cWv826o4BTwwpA2R4ik4kVw.webp"
        height={h}
      />
    );
  } else if (name === "Hufflepuff") {
    return (
      <img
        alt="후플푸프"
        src="https://i.namu.wiki/i/3RiJGBsTRCI3tQXerdHX3eDLz-LuLU6erkZhOOFpLQohZUooWtB_erxt1ExWWzrL0OFCjHP0Fi39DgjQGv7n0Behcd1FEZM6RLU9El2HCSloS4Px65UdRNubKRX5WycEmvAGLkFTkLq9lkZTlQsrTw.webp"
        height={h}
      />
    );
  } else if (name === "Slytherin") {
    return (
      <img
        alt="슬리데린"
        src="https://i.namu.wiki/i/hrRLZXNoIEvFKKg2atUviDldnPnROWU34cjAYf63oLR_s3Re4xwvr_oawXtFTOwvPjnCoXdmzh1p0wOyqd3fqaYOUvRuil12k8DJPG9AnPsdqEF6MPG-7cbgIK9s2gglZgQC-H5BEJlF2ZDou4mKQg.webp"
        height={h}
      />
    );
  }
  return <></>;
};
