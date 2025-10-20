// src/pages/Musicai.tsx
import React from "react";
import { FaPlay, FaPause, FaHeadphones } from "react-icons/fa6";
import familyAudio from "../assets/family.mp3";
const audioSrc = familyAudio;
import familyimg from "../assets/family.png";
const imageSrc = familyimg ;     // public/images/family.jpg

const lyrics = `
Verse 1:
Giữa bao bộn bề, cuộc đời đổi thay,
Ngôi nhà nhỏ vẫn sáng trong đêm dài.
Cha lặng lẽ vun trồng bao giấc mơ,
Mẹ giữ ngọn đèn – tình yêu không lời.

Chorus:
Gia đình là nơi ta trở về,
Nơi dạy ta sống, biết yêu thương và sẻ chia.
Không chỉ cơm áo, mà còn lòng nhân ái,
Giữ bình yên trong trái tim người Việt Nam.

Verse 2:
Dẫu cuộc sống cuốn trôi theo từng nhịp thở,
Công nghệ đôi khi khiến ta quên nhìn nhau.
Nhưng chỉ cần một ánh mắt, một nụ cười,
Là đủ thức tỉnh điều giản dị trong tim.

Bridge:
Đừng để bức tường ảo che đi ánh mắt thật,
Hãy nói yêu thương – khi còn có thể.
Từ mái nhà nhỏ, ta xây nên thế giới,
No ấm – công bằng – hạnh phúc – văn minh.

Chorus cuối:
Gia đình Việt Nam, giữa thời đại mới,
Mang trong tim triết lý yêu người, yêu đời.
Giữ lấy nhau – trong cơn sóng dữ,
Vì hạnh phúc là cùng nhau lớn lên.
`;

const formatTime = (t: number) => {
  if (!isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

const Musicai: React.FC = () => {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0); // 0..1
  const [dur, setDur] = React.useState(0);
  const [cur, setCur] = React.useState(0);

  // attach listeners
  React.useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onLoaded = () => setDur(el.duration || 0);
    const onTime = () => {
      setCur(el.currentTime || 0);
      if (el.duration) setProgress((el.currentTime || 0) / el.duration);
    };
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
      setCur(0);
    };
    el.addEventListener("loadedmetadata", onLoaded);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", onEnd);
    return () => {
      el.removeEventListener("loadedmetadata", onLoaded);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", onEnd);
    };
  }, []);

  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.play();
      setPlaying(true);
    }
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = audioRef.current;
    if (!el || !dur) return;
    const p = Number(e.target.value);
    el.currentTime = p * dur;
    setProgress(p);
  };

  return (
    <div className="min-h-screen w-full pt-28 pb-12 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Lyrics */}
        <section className="bg-white/95 border border-indigo-100 rounded-3xl shadow-2xl backdrop-blur-md p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-600 text-white">
              <FaHeadphones />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Lời bài hát
            </h1>
          </div>
          <div className="h-[520px] overflow-auto pr-2">
            <pre className="whitespace-pre-wrap leading-8 text-gray-800 tracking-wide">
              {lyrics}
            </pre>
          </div>
        </section>

        {/* Right: Illustration + Player */}
        <section className="bg-white/95 border border-indigo-100 rounded-3xl shadow-2xl backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ánh sáng trong mái nhà nhỏ</h2>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={imageSrc}
              alt="Minh hoạ bài hát"
              className="w-full aspect-[16/10] object-cover"
              loading="lazy"
            />

            {/* play/pause button */}
            <button
              onClick={togglePlay}
              aria-label={playing ? "Tạm dừng" : "Phát nhạc"}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full font-semibold shadow-xl
                         bg-white/90 hover:bg-white text-indigo-700 border border-indigo-200
                         transition transform hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2"
            >
              {playing ? <FaPause /> : <FaPlay />}
              {playing ? "Tạm dừng" : "Phát nhạc"}
            </button>
          </div>

          {/* timeline + time */}
          <div className="mt-6">
            <input
              type="range"
              min={0}
              max={1}
              step={0.001}
              value={progress}
              onChange={onSeek}
              className="w-full accent-indigo-600"
              aria-label="Thanh tiến trình"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>{formatTime(cur)}</span>
              <span>{formatTime(dur)}</span>
            </div>
          </div>

          {/* hidden audio element */}
          <audio ref={audioRef} src={audioSrc} preload="metadata" />
        </section>
      </div>
    </div>
  );
};

export default Musicai;
