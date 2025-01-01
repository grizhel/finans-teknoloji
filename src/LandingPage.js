import React from "react";
import YouTube from "react-youtube";
import ShardDiv from "./shard-ui/ShardDiv";
import ShardDialog from "./shard-ui/ShardDialog";
export default function Home(props) {
	return (
		<ShardDialog initiallyOpen={true}>
			<YouTube
				videoId={"UMEHijfnS6g"}
				id={""}
				className={"shard-div-center shard-youtube"}
				iframeClassName={"shard-youtube-center-container"}
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
	);
}
