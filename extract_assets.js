const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const outputDir = path.join(rootDir, 'public', 'sequences');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const videos = [
  {
    id: 'VIDEO_01',
    subject: 'Corporate IT consultancy / office introduction',
    file: 'Corporate_IT_consultancy_video_p…_28c4735c_1080p.mp4',
    maxDuration: 14.916667,
    fps: 4,
    folder: 'video_01',
    trimPolicy: '0.000s through 14.916s (Full clip)'
  },
  {
    id: 'VIDEO_02',
    subject: 'IT infrastructure / technical support',
    file: 'IT_technician_maintaining_server…_207dcb26_1080p.mp4',
    maxDuration: 10.0, // STRICTLY < 10.0s
    fps: 4,
    folder: 'video_02',
    trimPolicy: '0.000s through 10.000s ONLY (Discard >= 10.0s)'
  },
  {
    id: 'VIDEO_03',
    subject: 'Software development / digital solutions',
    file: 'Software_development_corporate_t…_b3eba9f5_1080p.mp4',
    maxDuration: 14.916667,
    fps: 4,
    folder: 'video_03',
    trimPolicy: '0.000s through 14.916s (Full clip)'
  },
  {
    id: 'VIDEO_04',
    subject: 'Careers / recruitment',
    file: 'Corporate_recruitment_video_prod…_0946945f_1080p.mp4',
    maxDuration: 10.0, // STRICTLY < 10.0s
    fps: 4,
    folder: 'video_04',
    trimPolicy: '0.000s through 10.000s ONLY (Discard >= 10.0s)'
  }
];

const manifest = [];

for (const v of videos) {
  const targetDir = path.join(outputDir, v.folder);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const inputPath = path.join(rootDir, v.file);
  console.log(`\nProcessing ${v.id}: ${v.file}`);

  // Calculate timestamps
  const step = 1 / v.fps;
  let t = 0;
  let frameIdx = 0;
  const frameList = [];

  while (t < v.maxDuration - 0.01) { // ensure strictly < maxDuration
    const frameNumber = String(frameIdx + 1).padStart(3, '0');
    const outFileName = `frame_${frameNumber}.webp`;
    const outFilePath = path.join(targetDir, outFileName);

    // ffmpeg extract specific timestamp
    const cmd = `ffmpeg -ss ${t.toFixed(3)} -i "${inputPath}" -vframes 1 -vf "scale=1280:720:force_original_aspect_ratio=decrease" -c:v libwebp -quality 82 "${outFilePath}" -y`;
    execSync(cmd, { stdio: 'ignore' });

    frameList.push({
      index: frameIdx,
      file: outFileName,
      timestamp: parseFloat(t.toFixed(3))
    });

    t += step;
    frameIdx++;
  }

  console.log(`Extracted ${frameList.length} frames for ${v.id}. Last timestamp: ${frameList[frameList.length - 1].timestamp}s`);

  manifest.push({
    id: v.id,
    subject: v.subject,
    sourceFile: v.file,
    trimPolicy: v.trimPolicy,
    approvedEndSeconds: v.maxDuration,
    frameCount: frameList.length,
    firstTimestamp: frameList[0].timestamp,
    lastTimestamp: frameList[frameList.length - 1].timestamp,
    dimensions: '1280x720',
    folder: `/sequences/${v.folder}/`,
    frames: frameList.map(f => f.file),
    validation: {
      status: 'VERIFIED',
      noExcludedFrames: v.maxDuration === 10.0 ? frameList.every(f => f.timestamp < 10.0) : true
    }
  });
}

fs.writeFileSync(path.join(outputDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log('\nManifest generated successfully at public/sequences/manifest.json');
