import { useState, } from "react"

const useInfiniteSlider = (Data) => {
	const [slider, setSlider] = useState(Data)
    const [imagesIndex, setImagesIndex] = useState()
    
    const slideLeft = () => {
        const newImages = [...slider]
        const lastImage = newImages.pop()
        newImages.unshift(lastImage);
		setSlider(newImages);
    }

    const slideRight = () => {
        const newImages = [...slider]
        const firstImage = newImages.shift()
        newImages.push(firstImage);
		setSlider(newImages); 
    }
const HandleGestureSlider = (e:any) => {
		const touch = e.touches[0];
		let xStart = touch.clientX;
		let yStart = touch.clientY;

		e.target.addEventListener('touchmove', (e) => {
			const touchMove = e.touches[0];
			let xDiff = touchMove.clientX - xStart;
			let yDiff = touchMove.clientY - yStart;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {
				if (xDiff > 0) {
					slideLeft();
				} else {
					slideRight();
				}
			}
		});

		e.target.addEventListener('touchend', () => {
			e.target.removeEventListener('touchmove', null);
		});
	};

    return {
        HandleGestureSlider,
		slider,
		imagesIndex
    }
}
export default useInfiniteSlider