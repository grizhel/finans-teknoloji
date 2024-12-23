import React from "react";
import YouTube from "react-youtube";
import ShardDiv from "./shard-ui/ShardDiv";
import ShardDialog from "./shard-ui/ShardDialog";
export default function Home(props) {
	return (
		<ShardDiv>
			<ShardDialog>
				<YouTube
					videoId={"R1891iRgIZY"}
					id={""}
					className={""}
					iframeClassName={""}
					style={{}}
					title={""}
					loading={""}
					opts={{}}
					onReady={() => {}}
					onPlay={() => {}}
					onPause={() => {}}
					onEnd={() => {}}
					onError={() => {}}
					onStateChange={() => {}}
					onPlaybackRateChange={() => {}}
					onPlaybackQualityChange={() => {}}
				/>
			</ShardDialog>
		</ShardDiv>
	);
}
