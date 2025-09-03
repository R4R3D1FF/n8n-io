import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="p-4 text-white">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="h-5 w-5 accent-purple-600"
        />
        <span>Accept Cookies</span>
      </label>

      <p className="mt-2">
        {checked ? "✅ You accepted" : "❌ Not accepted"}
      </p>
    </div>
  );
}
