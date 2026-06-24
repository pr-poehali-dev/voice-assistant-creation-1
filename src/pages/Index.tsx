import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

const AVATAR =
  'https://cdn.poehali.dev/projects/767f9e19-11e6-4a00-ade7-e282e309b2a8/files/c99bd69b-cc2f-4805-b0c3-4ec1ffb81c49.jpg';

type Msg = { role: 'user' | 'aurora'; text: string };

const Index = () => {
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'aurora', text: 'Привет, милый. Я Аврора — твой голосовой помощник. Спроси меня о чём угодно ✨' },
  ]);

  const [voiceSpeed, setVoiceSpeed] = useState([50]);
  const [voicePitch, setVoicePitch] = useState([60]);
  const [manipulation, setManipulation] = useState(true);
  const [alarmOn, setAlarmOn] = useState(false);
  const [alarmTime, setAlarmTime] = useState('07:30');

  const triggerSpeak = () => {
    setSpeaking(true);
    setTimeout(() => setSpeaking(false), 2600);
  };

  const send = () => {
    if (!text.trim()) return;
    setMessages((m) => [
      ...m,
      { role: 'user', text },
      { role: 'aurora', text: 'Конечно, я здесь для тебя. Сейчас всё расскажу нежно и по делу ♥' },
    ]);
    setText('');
    triggerSpeak();
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* фоновые свечения */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[26rem] w-[26rem] rounded-full bg-fuchsia-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-8">
        {/* header */}
        <header className="flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl neon-grad shadow-lg shadow-primary/30">
              <Icon name="Sparkles" className="text-white" size={22} />
            </div>
            <div>
              <p className="font-display text-xl font-bold leading-none">Аврора</p>
              <p className="text-xs text-muted-foreground mt-1">голосовой помощник</p>
            </div>
          </div>
          <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm">
            <span className={`h-2 w-2 rounded-full ${speaking ? 'bg-accent' : 'bg-emerald-400'} animate-pulse`} />
            {speaking ? 'Говорит…' : listening ? 'Слушает…' : 'Онлайн'}
          </div>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* ЦИФРОВАЯ ДЕВУШКА */}
          <section className="glass relative rounded-[2rem] p-6 animate-fade-in">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              {/* орбита */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
              <div
                className="absolute inset-6 rounded-full border border-accent/20 animate-spin-slow"
                style={{ animationDirection: 'reverse' }}
              />
              {/* свечение под аватаром */}
              <div
                className={`absolute inset-8 rounded-full neon-grad blur-2xl ${
                  speaking ? 'animate-glow-pulse' : 'opacity-40'
                }`}
              />

              <div className="absolute inset-8 overflow-hidden rounded-full ring-2 ring-primary/40 animate-float">
                <img src={AVATAR} alt="Аврора" className="h-full w-full object-cover" />
                {/* анимированный рот при разговоре */}
                {speaking && (
                  <div className="absolute left-1/2 top-[63%] -translate-x-1/2">
                    <div className="h-3 w-12 origin-center rounded-full bg-rose-400/80 animate-mouth-talk shadow-[0_0_20px] shadow-rose-400/60" />
                  </div>
                )}
              </div>
            </div>

            {/* звуковая волна */}
            <div className="mt-6 flex h-12 items-center justify-center gap-1.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 rounded-full neon-grad ${speaking || listening ? 'animate-wave-bar' : ''}`}
                  style={{
                    height: speaking || listening ? '100%' : '20%',
                    animationDelay: `${i * 0.06}s`,
                    opacity: 0.5 + (i % 5) * 0.1,
                  }}
                />
              ))}
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              {speaking ? 'Аврора отвечает голосом…' : 'Нажми на микрофон или напиши сообщение'}
            </p>
          </section>

          {/* ПРАВАЯ КОЛОНКА */}
          <div className="flex flex-col gap-6">
            {/* диалог */}
            <section className="glass rounded-[2rem] p-5 animate-fade-in">
              <h2 className="mb-3 font-display text-lg font-bold neon-text">Диалог</h2>
              <div className="flex max-h-48 flex-col gap-3 overflow-y-auto pr-1">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      m.role === 'user' ? 'self-end neon-grad text-white' : 'self-start neumorph'
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              {/* ввод текста + микрофон */}
              <div className="mt-4 flex items-center gap-2">
                <Input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder="Напиши Авроре…"
                  className="rounded-full border-border bg-secondary/50 focus-visible:ring-primary"
                />
                <Button
                  onClick={send}
                  size="icon"
                  className="h-11 w-11 shrink-0 rounded-full neon-grad text-white hover:opacity-90"
                >
                  <Icon name="Send" size={18} />
                </Button>
                <Button
                  onClick={() => {
                    setListening((v) => !v);
                    if (!listening) triggerSpeak();
                  }}
                  size="icon"
                  className={`h-11 w-11 shrink-0 rounded-full text-white transition ${
                    listening ? 'bg-rose-500 animate-glow-pulse' : 'bg-accent text-accent-foreground hover:opacity-90'
                  }`}
                >
                  <Icon name={listening ? 'MicOff' : 'Mic'} size={18} />
                </Button>
              </div>
            </section>

            {/* настройки голоса */}
            <section className="glass rounded-[2rem] p-5 animate-fade-in">
              <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-bold">
                <Icon name="SlidersHorizontal" size={18} className="text-accent" />
                Настройки голоса
              </h2>

              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-muted-foreground">Скорость речи</span>
                    <span className="font-semibold">{voiceSpeed[0]}%</span>
                  </div>
                  <Slider value={voiceSpeed} onValueChange={setVoiceSpeed} max={100} step={1} />
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-muted-foreground">Нежность тембра</span>
                    <span className="font-semibold">{voicePitch[0]}%</span>
                  </div>
                  <Slider value={voicePitch} onValueChange={setVoicePitch} max={100} step={1} />
                </div>

                <div className="flex items-center justify-between rounded-2xl neumorph-inset px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Wand2" size={18} className="text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Режим манипуляций</p>
                      <p className="text-xs text-muted-foreground">Убеждающие приёмы в ответах</p>
                    </div>
                  </div>
                  <Switch checked={manipulation} onCheckedChange={setManipulation} />
                </div>
              </div>
            </section>

            {/* будильник */}
            <section className="glass rounded-[2rem] p-5 animate-fade-in">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold">
                  <Icon name="AlarmClock" size={18} className="text-primary" />
                  Будильник
                </h2>
                <Switch checked={alarmOn} onCheckedChange={setAlarmOn} />
              </div>
              <div className={`mt-4 flex items-center gap-3 transition ${alarmOn ? 'opacity-100' : 'opacity-40'}`}>
                <Input
                  type="time"
                  value={alarmTime}
                  onChange={(e) => setAlarmTime(e.target.value)}
                  disabled={!alarmOn}
                  className="w-36 rounded-full border-border bg-secondary/50 text-lg font-display"
                />
                <p className="text-sm text-muted-foreground">
                  {alarmOn ? `Аврора разбудит тебя в ${alarmTime}` : 'Выключен'}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
