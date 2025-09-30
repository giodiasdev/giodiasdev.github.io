import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
    const el = (
        <div
            style={{
                fontSize: 24,
                backgroundColor: '#0a0a0a',
                color: '#ededed',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: "50%"
            }}
        >
            G
        </div>
    );

    return new ImageResponse(el, { ...size });
}
