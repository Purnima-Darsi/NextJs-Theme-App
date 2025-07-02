'use client';
import { useTheme } from '@/contexts/ThemeContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ConfigurePage() {
  const { themeIdx, setThemeIdx, logo, setLogo, appName, setAppName, themes } = useTheme();
  const router = useRouter();
  const [selectedFileName, setSelectedFileName] = useState<string>('');

  function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  function handleReset() {
    setThemeIdx(0); // Reset to default theme
    setLogo(null); // Remove logo
    setAppName('Themed App'); // Reset app name
    setSelectedFileName(''); // Clear file name
    localStorage.removeItem('themeConfig'); // Clear saved config
  }

  function handleSave() {
    router.push('/');
  }

  return (
    <div className="flex items-center justify-center bg-background p-8 pt-16 pb-20">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl mb-4 font-bold">Configure App Theme</h2>
        
        {/* App Name Section */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">App Name</label>
          <input
            type="text"
            value={appName || 'Themed App'}
            onChange={(e) => setAppName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter app name"
          />
        </div>
        
        {/* Logo Section */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Logo</label>
          {logo && <img src={logo} alt="Logo" className="h-16 mb-2 border rounded" />}
          
          <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleLogoChange}
              className="hidden"
              id="logo-upload"
            />
            <label 
              htmlFor="logo-upload" 
              className="cursor-pointer text-primary hover:text-primary/80 font-medium"
            >
              Choose File
            </label>
            <div className="text-sm text-gray-500 mt-1">
              {logo && selectedFileName ? (
                <span className="text-green-600">✓ {selectedFileName}</span>
              ) : logo ? (
                <span className="text-green-600">✓ Logo uploaded</span>
              ) : (
                "No file selected"
              )}
            </div>
          </div>
        </div>

        {/* Color Theme Section */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Color Theme</label>
          <div className="flex gap-3 justify-center">
            {themes.map((t: any, idx: number) => (
              <button
                key={t.name}
                className={`w-10 h-10 rounded-full border-3 hover:scale-110 transition-transform ${
                  themeIdx === idx ? 'border-primary ring-2 ring-primary/30' : 'border-gray-300'
                }`}
                style={{ background: t.colors.primary }}
                onClick={() => setThemeIdx(idx)}
                type="button"
                title={`${t.name} Theme`}
                aria-label={`Select ${t.name} theme`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            Selected: <span className="font-semibold">{themes[themeIdx]?.name || 'Default'}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button className="btn w-full" onClick={handleSave}>
            Save & Continue
          </button>
          <button 
            className="w-full py-2 px-4 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors" 
            onClick={handleReset}
          >
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
}
