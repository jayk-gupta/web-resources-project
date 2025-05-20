import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex flex-col w-full h-screen mt-6">
      <motion.div
        className="p-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Web Resources Hub
        </h1>
        
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <p>
            Welcome to Web Resources Hub, your comprehensive platform for web development
            learning and resources. Our mission is to empower developers of all levels
            with the tools and knowledge they need to succeed in the ever-evolving
            world of web development.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
            Our Vision
          </h2>
          <p>
            We believe that quality learning resources should be accessible to everyone.
            Our platform curates the best web development resources, from beginner-friendly
            tutorials to advanced technical documentation, helping you grow your skills
            at your own pace.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Comprehensive documentation for popular web technologies</li>
            <li>Curated learning paths for different skill levels</li>
            <li>Best practices and coding standards</li>
            <li>Community-driven resource recommendations</li>
            <li>Regular updates with the latest web development trends</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
            Join Our Community
          </h2>
          <p>
            Whether you're just starting your web development journey or you're an
            experienced developer looking to stay updated, Web Resources Hub is here
            to support your growth. Join our community of learners and contributors
            to share knowledge and help others succeed.
          </p>
        </div>
      </motion.div>
    </div>
  );
} 