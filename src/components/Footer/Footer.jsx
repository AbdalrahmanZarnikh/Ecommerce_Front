import React from 'react'

const Footer = () => {
  return (
       <footer className="bg-blue-900 text-white py-8 px-4 dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">عن المتجر</h2>
          <p className="text-sm text-gray-400">
            متجر إلكتروني يقدم منتجات متنوعة تشمل الإلكترونيات، الملابس، الأدوات المنزلية والمزيد.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">روابط سريعة</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/contact" className="hover:text-white">اتصل بنا</a></li>
            <li><a href="/privacy" className="hover:text-white">سياسة الخصوصية</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">تابعنا</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}

export default Footer
