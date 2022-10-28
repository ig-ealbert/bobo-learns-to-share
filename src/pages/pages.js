const pageText = [
  `
  Story and art by
  Elizabeth Albert
  `,
  `
  BoBo and YoYo both love to sleep.
  BoBo especially loves to sleep in the cat bed
  because it has a soft, warm blanket.
  `,
  `
  One day, when BoBo got up to eat,
  YoYo curled up in the cat bed and went to sleep.
  When BoBo got back, she was angry that her bed was taken!
  `,
  `
  BoBo decided that she would stay in the cat bed.
  That way, it would always be hers, and no one could take it from her.
  `,
  `
  Days passed and BoBo ruled the cat bed.
  She wouldn't even get up for food.
  `,
  `
  YoYo ate, played with toys, and watched animals outside.
  BoBo remained in her spot.
  `,
  `
  As time went on, BoBo started to feel weak.
  She was hungry.  Her body ached.
  She was bored.  She was lonely.
  `,
  `
  Why was she so unhappy?  She had her bed, right?
  What if life wasn't all about owning the bed?
  Food, play, and companionship were missing from her life.
  And what if YoYo slept in the bed for a bit?  That would be ok.
  `,
  `
  She decided to try eating, playing, and being friendly again.
  She started to feel better.  She became happier and healthier.
  YoYo was pleased to have his friend back.
  `,
  `
  Sharing the bed was good for both of them.
  BoBo was in there most, but not all, of the time.
  For now, the bed was hers, and she went to sleep.
  `
];

const images = [
  "./images/cover-page.png",
  "./images/bobo-yoyo-bed.png",
  "./images/yoyo-bed-bobo-angry.png",
  "./images/bobo-only-bed.png",
  "./images/bobo-happy-bed-no-food.png",
  "./images/yoyo-eating-playing-watching.png",
  "./images/bobo-sad-bed-no-food.png",
  "./images/bobo-sad-thinking.png",
  "./images/bobo-eating-playing-watching.png",
  "./images/bobo-sleeping.jpg"
];

export const allPages = [];

for (const [index, text] of pageText.entries()) {
  const page = {
    text,
    image: images[index]
  }
  allPages.push(page);
}
