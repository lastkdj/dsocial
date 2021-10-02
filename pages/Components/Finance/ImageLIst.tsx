import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 800, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://i.imgur.com/CkGTcBn.jpg",
    title: "park",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.imgur.com/EkfeLJy.jpg",
    title: "wall",
  },
  {
    img: "https://i.imgur.com/QyNdzA1.png",
    title: "Camera",
  },
  {
    img: "https://i.imgur.com/At3F5hw.jpg",
    title: "Coffee",
    cols: 2,
    rows: 2,
  },
  {
    img: "https://i.imgur.com/C4E4xn0.jpg",
    title: "Hats",
    cols: 2,
    rows: 3,
  },
  {
    img: "https://i.imgur.com/SAbxJBf.jpg",
    title: "Honey",
    author: "@arwinneil",

    cols: 2,
  },
  {
    img: "https://i.imgur.com/8OzmNsF.jpg",
    title: "Basketball",
    cols: 2,
    rows: 2,
  },
  {
    img: "https://i.imgur.com/YrPSq5d.jpg",
    title: "Fern",
    rows: 2,
    cols: 2,
  },
];
