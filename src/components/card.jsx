import { InlineWidget } from "react-calendly";


export default function Card({ name, imgUrl, description }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={imgUrl} alt={name} style={styles.image} />
      </div>

      <div style={styles.content}>
        <h2 className="kaisei-font" style={{"font-size": "1.5em", "text-align": "center"}}><b>{name}</b></h2>
        <p className="kaisei-font" style={{"font-size": "1em", "margin-top": "0.5rem"}}>
            {description}
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    overflow: "hidden",
    width: "90%",
  },
  imageContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",        // responsive
    height: "auto",
    objectFit: "contain",
  },
  content: {
    width: "50%",
    textAlign: "justify",
    display: "block"
  },
};
