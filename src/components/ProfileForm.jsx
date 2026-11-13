import { useState } from 'react';

export default function ProfileForm() {
  const [name, setName] = useState('');
  const [track, setTrack] = useState('Frontend Development');
  const [available, setAvailable] = useState(true);
  const [error, setError] = useState('');
  const [submittedProfile, setSubmittedProfile] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError('Please enter your name before submitting.');
      setSubmittedProfile(null);
      return;
    }

    setError('');
    setSubmittedProfile({
      name: name.trim(),
      track,
      available
    });
  }

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1F302B]">
            Full name
          </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            className="w-full rounded-xl border border-[#D9D5C9] bg-[#FAF9F5] px-4 py-3 text-sm outline-none transition focus:border-[#315F59] focus:ring-2 focus:ring-[#315F59]/15"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1F302B]">
            Learning track
          </label>
          <select
            value={track}
            onChange={(event) => setTrack(event.target.value)}
            className="w-full rounded-xl border border-[#D9D5C9] bg-[#FAF9F5] px-4 py-3 text-sm outline-none focus:border-[#315F59]"
          >
            <option>Frontend Development</option>
            <option>Backend Development</option>
            <option>UI/UX Design</option>
            <option>Quality Assurance</option>
          </select>
        </div>

        <label className="flex items-center gap-3 text-sm text-[#1F302B]">
          <input
            type="checkbox"
            checked={available}
            onChange={(event) => setAvailable(event.target.checked)}
            className="h-4 w-4 accent-[#315F59]"
          />
          Available for projects
        </label>

        {error && (
          <p className="rounded-xl bg-[#FBEDE7] p-3 text-sm text-[#A64F39]">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-[#315F59] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1F302B]"
        >
          Submit profile
        </button>
      </form>

      {submittedProfile && (
        <div className="rounded-2xl border border-[#D9D5C9] bg-[#F4F1E8] p-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#B68C55]">
            Profile submitted
          </p>
          <p className="font-bold text-[#1F302B]">
            {submittedProfile.name}
          </p>
          <p className="mt-1 text-sm text-[#737A72]">
            {submittedProfile.track}
          </p>
          <p className="mt-2 text-sm text-[#315F59]">
            {submittedProfile.available ? 'Available' : 'Not available'}
          </p>
        </div>
      )}
    </div>
  );
}