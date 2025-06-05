import React from 'react'
import { Construction, Palette, BarChart3, Link, Zap, Clock } from 'lucide-react'

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Construction className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dashboard
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {" "}Under Development
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I am crafting something amazing for you! Your powerful LinkLoom dashboard will be ready soon.
          </p>
        </div>

        {/* Coming Soon Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50">
            <div className="text-purple-600 mb-4">
              <Link className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Link Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Add, edit, and organize all your important links with drag-and-drop simplicity. Customize each link with icons and descriptions.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50">
            <div className="text-purple-600 mb-4">
              <Palette className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Page Customization</h3>
            <p className="text-gray-600 leading-relaxed">
              Make your LinkLoom page uniquely yours with custom themes, colors, backgrounds, and fonts that perfectly match your brand.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50">
            <div className="text-purple-600 mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Dashboard</h3>
            <p className="text-gray-600 leading-relaxed">
              Track your link performance with detailed analytics. See clicks, visitor insights, and optimize your content strategy.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50">
            <div className="text-purple-600 mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom URL</h3>
            <p className="text-gray-600 leading-relaxed">
              Create your personalized LinkLoom URL that is easy to remember and share. Make your link truly yours with custom domains.
            </p>
          </div>
        </div>

        {/* Status Update */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Development Status</h2>
          </div>
          <div className="text-center">
            <p className="text-lg mb-4 opacity-90">
              I am working hard to bring you the most intuitive and powerful link management experience.
            </p>
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="font-semibold">Expected Launch: Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            • Built with ❤️ by Nayan Katiyara •
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage