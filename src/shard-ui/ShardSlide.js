import React, { useEffect, useState } from "react";
import ShardButton from "./ShardButton";
import ShardH from "./ShardH";
import ShardDiv from "./ShardDiv";
import ShardP from "./ShardP";
import ShardSpan from "./ShardSpan";
import ShardA from "./ShardA";

export default function ShardSlide(props) {
	const [slideIndex, setSlideIndex] = useState(1);

	function plusDivs(n) {
		setSlideIndex(slideIndex + n);
	}

	function showDivs(n) {
		let i;
		let sldIndex = slideIndex;
		let x = document.getElementsByClassName("slide-show");
		if (n > x.length) {
			sldIndex = 1;
		}
		if (n < 1) {
			sldIndex = x.length;
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		x[sldIndex - 1].style.display = "block";
		setSlideIndex(sldIndex);
	}

	useEffect(() => {
		showDivs(slideIndex);
	}, [slideIndex]);

	const buttonStyle = {
		height: 220,
		marginTop: 10,
	};

	return (
		<>
			<ShardButton
				style={buttonStyle}
				onClick={() => {
					plusDivs(-1);
				}}>
				&#10094;
			</ShardButton>
			<ShardDiv className="shard-slide-container">
				{props.slides.map((q, i) => (
					<ShardDiv key={i} style={{ width: "100%" }} className="slide-show">
						<ShardDiv
							style={{
								background: `url(${q.img}) no-repeat`,
							}}
							className="shard-slide-image"></ShardDiv>
						<ShardDiv className="shard-slide-content">
							<ShardP>{q.content}</ShardP>
						</ShardDiv>
					</ShardDiv>
				))}
			</ShardDiv>
			<ShardButton
				style={buttonStyle}
				onClick={() => {
					plusDivs(1);
				}}>
				&#10095;
			</ShardButton>
		</>
	);
}
