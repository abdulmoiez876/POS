import smoothie from "../../../assets/smoothie.jpg";
import burger from "../../../assets/burger.jpg";
import bburger from "../../../assets/burger.jpg";
import zburger from "../../../assets/burger.jpg";
import pizza from "../../../assets/pizza.jpg";
import fries from "../../../assets/fries.jpg";
import sshake from "../../../assets/smoothie.jpg";
import bshake from "../../../assets/banana.jpg"

const ProductData = [
    {
        title: "Smoothie",
        price: "250",
        cat: true,
        src: smoothie,
        details: [
            { title: "Strawbery Shake", price: "250", src: sshake, cat: false },
            { title: "Banana Shake", price: "250", src: bshake, cat: false }
        ]
    },
    {
        title: "Burger",
        price: "450",
        cat: true,
        src: burger,
        details: [
            { title: "Beef Burger", price: "550", src: bburger, cat: false },
            { title: "Zinger Burger", price: "350", src: zburger, cat: false }
        ]
    },
    {
        title: "Pizza",
        price: "999",
        cat: true,
        src: pizza,
        details: [
            { title: "Tikka Pizza", price: "999", src: pizza, cat: false },
            { title: "Fajita Pizza", price: "999", src: pizza, cat: false }
        ]
    },
    {
        title: "Fries",
        price: "100",
        cat: true,
        src: fries,
        details: [
            { title: "Masala Fries", price: "50", src: fries, cat: false },
            { title: "Loaded fries", price: "300", src: fries, cat: false }
        ]
    },
];

export default ProductData;