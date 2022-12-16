-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 16, 2022 at 05:08 PM
-- Server version: 8.0.24
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel-2`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`) VALUES
(2, 'Супи', '/uploads/categories/oLorFP25HjPld3rd1JRofnA4uYo9MHYmWqo7tJzc.jpg'),
(3, 'Соуси', '/uploads/categories/bHZaMKXoCdAxAbbUbrAAXABK688FLa0vqEMd4lSd.png'),
(4, 'Сети', '/uploads/categories/hcl3ntbdSubPSFjhHvVKgseu38YeFlCKmxUYYfS4.png'),
(60, 'Сашимі', '/uploads/categories/6m9DRUbCueehn8I77i6709tyzj48LwvlyxQtQ9E0.jpg'),
(61, 'Роли і суши', '/uploads/categories/WO1xyiSTibAi5LjEN9nLfoNsJjWRbYWsBc0UDmtd.jpg'),
(62, 'Поке і салати', '/uploads/categories/DAFkC52hc4OhVB28UnYhyYrM1GArgrTojwqOv2NS.jpg'),
(63, 'Піца', '/uploads/categories/Hpdaa2M8TTm3sgBLLO6FKYp7vO6DvZn776lZzHXt.jpg'),
(64, 'Напої', '/uploads/categories/RTwR51siwdicrrTP5iLMN2jxByPKldplPEquWjpN.jpg'),
(65, 'Нагетси', '/uploads/categories/uQS6WGtOSbmtIrgMpXXahqVYOsclavsMuIbwGQBZ.jpg'),
(66, 'Десерти', '/uploads/categories/MlLGD6MaJiNowHMz6cjEM0zb50nfvVbi3e4sFiNR.jpg'),
(67, 'Бургери', '/uploads/categories/rGNJrXHbRUN5ACjvFqzD4oAGOlNnbIvxf1wiz6Tf.jpg'),
(68, 'Wok і паста', '/uploads/categories/C399xPSaOy32OfFYBkEmTw5zVBi4y5EmDpA68W5f.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `galleries`
--

CREATE TABLE `galleries` (
  `id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(15, '2014_10_12_000000_create_users_table', 1),
(16, '2014_10_12_100000_create_password_resets_table', 1),
(17, '2019_08_19_000000_create_failed_jobs_table', 1),
(18, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(19, '2022_10_10_110824_create_categories_table', 1),
(20, '2022_10_10_111518_create_products_table', 1),
(21, '2022_10_18_174242_create_orders_table', 1),
(22, '2022_10_18_174738_create_order_items_table', 1),
(23, '2022_11_17_184337_create_galleries_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint UNSIGNED NOT NULL,
  `total_sum` double(8,2) NOT NULL,
  `user_email` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_phone` varchar(18) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_name` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_adress` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_adress_house` bigint NOT NULL,
  `user_adress_number` bigint NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `total_sum`, `user_email`, `user_phone`, `user_name`, `user_adress`, `user_adress_house`, `user_adress_number`, `created_at`, `updated_at`) VALUES
(2, 1512.00, 'at2@gmail.com', '12313131', '', '', 0, 0, '2022-10-27 14:20:53', '2022-11-15 13:13:22'),
(3, 1512.00, 'alt@gmail.com', '13213131313', 'Artem', 'Avramenko', 16, 204, '2022-10-27 14:36:13', '2022-12-15 12:05:39'),
(4, 1512.00, 'alt@asd.sad', '131313131', '', '', 0, 0, '2022-10-27 14:36:44', '2022-10-27 14:36:44'),
(5, 1512.00, 'qewq@qew.qwe', '13123131', '', '', 0, 0, '2022-10-27 14:42:23', '2022-10-27 14:42:23'),
(6, 1512.00, 'asda@gm.cac', '1313131', '', '', 0, 0, '2022-10-27 14:46:38', '2022-10-27 14:46:38'),
(7, 1512.00, 'qe@ad.com', '1231313', '', '', 0, 0, '2022-10-27 14:47:51', '2022-10-27 14:47:51'),
(8, 1512.00, 'qwe@ae.com', '131313131', '', '', 0, 0, '2022-10-27 14:48:17', '2022-10-27 14:48:17'),
(9, 126.00, 'artlevchenko2@gmail.com', '12313131313', '', '', 0, 0, '2022-10-27 15:01:34', '2022-10-27 15:01:34');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED DEFAULT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_price` double(8,2) NOT NULL,
  `product_amount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `product_name`, `product_price`, `product_amount`) VALUES
(2, 3, NULL, 'Ball', 126.00, 11),
(3, 4, NULL, 'Ball', 126.00, 12),
(4, 5, NULL, 'Ball', 126.00, 12),
(5, 6, NULL, 'Ball', 126.00, 12),
(6, 7, NULL, 'Ball', 126.00, 12),
(7, 8, NULL, 'Ball', 126.00, 12),
(8, 9, NULL, 'Ball', 126.00, 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` bigint NOT NULL,
  `weight` float DEFAULT NULL,
  `category_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `description`, `price`, `weight`, `category_id`) VALUES
(2, 'Бульйон з куркою', '/uploads/products/wgfLQc1LN8hMintFjCyyl4i1Hs3iuSAt6VWh569e.png', 'Бульйон курячий, Куряче філе, Локшина, Яйце, Кріп, Сухарики', 115, 350, 2),
(12, 'Вершковий місо-суп з лососем', '/uploads/products/gHN619FnEv5qWMEgWSAhX9xd2jJQKXyvPAkErv2E.jpg', 'Вершки, Місо бульйон, Соєвий соус, Хандаші, Цибуля порей, Лосось, Тофу, Водорості вакаме, Цибуля зелена, Кунжут ч / б', 199, 380, 2),
(13, 'Окрошка з куркою', '/uploads/products/1pvNALaL9CObHqiODzlG73qH1d6xdC1GNlhfcTR4.png', 'Курка копчена, Картопля відвана, Огірок, Яйця, Майонез, Гірчиця діжонська, Сік лимона, Кріп , Цибуля зелена, Сіль, Перець чорний', 115, 360, 2),
(16, 'Окрошка з лососем', '/uploads/products/VHOHOl5OZOlhJ9HaPWyPgor3W9hNM2nke2XOCs9P.png', 'Лосось с/с,Ккартопля відварна, Огірок, Яйця, Майонез, Гірчиця діжонська, Сік лимона, Кріп, Лук зелений, Сіль, Перець чорний', 145, 360, 2),
(31, 'Рамен з беконом', '/uploads/products/0h4FO3yXfiYNEymHiZf3DrPAgyZsLhxe7izCipXn.png', 'Бульйон Рамен, Шрирача, Локшина пшенична, (удон), Капуста ким-чи, Яйце, печериці, бекон, Цибуля зелена,Стружа норі, Кунжут ч/б, Перець чилі', 195, 420, 2),
(35, 'Том Кха з куркою', '/uploads/products/0aReWzB35fINOp0MfBipu8BxZjn1yk1TuKuVt7t5.jpg', 'Бульйон рибний, Кокосове молоко, Паста том-ям, Лемонграс, Імбир свіжий, Печериці, Чері, Куряче філе, Шматочок лайма, Кінза, Перець чилі', 205, 380, 2),
(36, 'Том-ям з морепродуктами', '/uploads/products/fmtfVEwHcs8vqqnt6b193Xn2viRhmcUyjFsza3U7.png', 'Состав Бульйон том-ям, Лемонграс, Імбир свіжий, Печериці, Чері, Креветка королівська, Кальмар, Мідія, Лайм, Кінза, Перець чилі', 245, 380, 2),
(39, 'Рамен з куркою', '/uploads/products/FW7tds33Gqvn8sJk1NlnWZCYjqSNekgnB1SDAMRS.png', 'Бульйон рамен, Лапша пшенична (удон), Лук порей, Яйця, Кукурудза, Філе куряче, Лук зелений, Стружка норі, Кунжут ч/б', 195, 420, 2),
(43, 'Барбекю соус', '/uploads/products/ktu9VhOedh4U2j4AsCK8Js2BqQcdC4R3AfbrVDk1.png', 'Помідор (стиглі), Чорнослив, Цукор, Перець Чилі,\r\n Часник, Сіль', 20, 30, 3),
(44, 'Васабі', '/uploads/products/ElKi7Hk7VP5nSeLdzHwxoPso7AlTzN4OZBgjLeKw.png', 'порошок васабі, рослинна олія ,1 яйце, лимонний сік, кип\'ячена вода, перець та сіль', 5, 15, 3),
(45, 'Гірчиця', '/uploads/products/B04s4gPsfweGwTfubqioMT8ZpoMc29HrRhYfhNUg.png', 'Гірчичний порошок, соль, гаряча вода, мед, лимонний сік,  олія.', 20, 30, 3),
(46, 'Горіховий соус', '/uploads/products/KpUQSOlUcXeeqnyoW8q8Rnx1III6hyEG1z7S5UVn.png', 'Смажений солоний арахіс, Мед, Винний оцет (рисовий оцет),Соняшникова олія, Вода, Сік лимона .', 20, 30, 3),
(47, 'Кімчі соус', '/uploads/products/GiFU3YLIFUrnRF5UDRsy1OZ7lkRapjbnL48bMH4F.png', 'Вода, перец чилі, редька, яблоко, сахар, крохмальна потока, екстракт водоростей комбу, уксус, соль, лимонна кислота, паприка.', 20, 30, 3),
(48, 'Манго-чілі соус', '/uploads/products/3hTDYQs7rioOEjK03iy329NmCmTmrMMLiFXq5kEj.png', 'Цукор, дистильований білий оцет, манго,\r\nцибулина, світлий кишміш, імбир,часник, гірчиця,\r\nчервоний перець чилі.', 20, 30, 3),
(49, 'Соєвий соус', '/uploads/products/0bekbgm76J9ueDY8fdZkVF1BA8fNkuwxXvKP0KMR.png', 'Соєвий білок, Барвники, Сіль, Бензонат натрію,\r\nКрохмаль, Сорбат калію, Концентрат соєвого соусу,\r\nГлутамат натрію, Лимонна кислота, Згущувач,\r\nАроматизатори.', 20, 40, 3),
(50, 'Спайси соус', '/uploads/products/GRUrRTczZo9sH1lKz6a60XRloy6LDUGapUkBuf4t.png', 'Японський майонез, соєвий соус, червоний перець, чилі, васабі, табаско на вибір, овочеве пюре, цибуля, часнику, лимон, спеції.', 20, 30, 3),
(51, 'Тайський чилі соус', '/uploads/products/42JQVKGwKZ07bD2yNkNPbC0Ekm1iqFStKk34Ohaj.png', 'Часник, перець чилі , вода, цукор, рисовий оцет,\r\nкрохмаль.', 20, 30, 3),
(52, 'Унагі соус', '/uploads/products/fX08DDuC6u3NcPFt2vjrv7adbvwQlvf2p70W4LpO.png', 'Соєвий соус, Сухе вино, Міріна,\r\nЦукор (мед), Приправа хондаші.', 20, 30, 3),
(53, 'Часниковий соус', '/uploads/products/L4ECUbrMozTMdmGVWv4hTumAxByQltVE813PHTD1.png', 'Сметана, Майонез, Часник, Кріп, Сіль,\r\nПерець чорний мелений.', 20, 30, 3),
(54, 'Млинці з родзинками та сиром', '/uploads/products/RaRGJRh961J1sMmyYDqjSeselOTiyFurPpvsoERP.png', 'Млинці з сиром – це смачна страва, яка подобається і дорослим, і дітям (2 шт)', 85, 150, 66),
(55, 'Сирники з мигдалевими пластівцями', '/uploads/products/xpwJM55BvzcMbrcfxHworbHcxieQnX9yLkocmGgw.png', 'Ніжні ароматні сирники з родзинками, карамельним топінгом і мигдалевими пластівцями – ідеальний варіант для сніданку', 85, 150, 66),
(56, 'Креветки в клярі', '/uploads/products/udnTGBtzfI7KpcgtfozAoqcop7s1mnlXAbelZbGK.png', 'Креветки, Яйця, Пшеничне борошно,\r\nСіль, Рослинна олія.', 169, 100, 65),
(57, 'Лососеві палички в клярі', '/uploads/products/mQqzLA9kJnSeBThbuCUjRbLGkI14iKegwRZCt8xH.png', 'Лосось, Яйця, Пшеничне борошно,\r\nСіль, Рослинна олія.', 155, 100, 65),
(58, 'Нагетси курячі фрі', '/uploads/products/kGguWlZsZL7XKMvM1CXnMIzXvHi3LA994G2W6eBT.png', 'Куриця, Яйця, Пшеничне борошно,\r\nСіль, Рослинна олія.', 125, 150, 65),
(59, 'Сирні палички фрі', '/uploads/products/5am8wWxCBiQo5xtc7Oj1xnorOf03SJy1yxiqgJFV.png', 'Сир, Яйця, Пшеничне борошно,\r\nСіль, Рослинна олія.', 99, 150, 65),
(60, 'Аризона бургер', '/uploads/products/4vAghrovbfGe65ME5V20wD0sma3V01rcFAz3xIsT.png', 'Булка біла, Салат айсберг, Соус для бургера, Маринований огірок, Свинина, Сир чедер, Цибуля карамелізована, Гриби печериці, Перець чилі маринований, Соус часниковий', 169, 300, 67),
(63, 'Бургер беконатор', '/uploads/products/jxSFZh9o2j8dSWFAwNlmyL2d9VP9Jy4NyIK96wW9.png', 'Булка біла, Салат айсберг, Соус для бургера, Маринований огірок, Цибуля, Яловича котлета, Сир чедер, Помідор, Бекон, Соус гірчично-медовий', 179, 300, 67),
(64, 'Бургер британський сніданок', '/uploads/products/6oyzGpUQApq27odTxESrSFqbYpe0XqxgqlieHEt9.png', 'Булка біла, Соус для бургера, Маринований огірок, Яловича котлета, Сир чедер, Бекон, Соус томатний, Цибуля фрі, Яйце, Соус часниковий', 195, 350, 67),
(65, 'Кентукі бургер', '/uploads/products/BOEWlisHYpJeaMhjz4D5Wc0JRMNrgb49cdTduAki.png', 'Булка біла, Салат айсберг, Соус гірчично-медовий, Маринований огірок, Цибуля, Гриби печериці, Куряче філе фрі, Соус томатний, Яйце, Цибуля фрі', 185, 300, 67),
(66, 'Максі бургер', '/uploads/products/QzLTqKKM6jx6eCQ4ettgppd2sHsEKZNpFmAdkzse.png', 'Булка біла, салат айсберг, Соус часниковий, Маринований огірок, Цибуля, Соус гірчично-медовий, Яловича котлета (2шт), Сир чедер (2шт), Помідор, Бекон, Соус томатний', 245, 400, 67),
(67, 'Чікен бургер', '/uploads/products/2mTTMNnUGL7D9T5YCQGLvL7TH9fnlVGFN5pAc4Ua.png', 'Булка біла, Салат айсберг, Соус цезар, Огірок свіжий, Помідор, Куряче філе, сир чедер, Цибуля фрі, Соус томатний', 158, 280, 67),
(68, 'Сашимі вугор', '/uploads/products/Pr1chkxMc5xJFNn9OQpGknMY2Mv67Tf2ac4BLn6a.png', 'Вугор, Рисова локшина, Огірок, Лимон, Соус унагі, Кунжут', 195, 100, 60),
(69, 'Сашимі окунь', '/uploads/products/AfWnt7stP9JL09AkY4n7nnOTxSZbs7Y5LozRkkTs.png', 'Окунь, Рисова локшина, Огірок, Лимон', 125, 100, 60),
(70, 'Cалат крабовий банзай', '/uploads/products/RwV7xePyyzLVq6crD7Qg7PQuJNhBWJTk3Fyh5z6O.png', 'Пекінська капуста, Огірок, Яйце, Кукурудза, Японський майонез, Сніжний краб, Кунжу', 145, 200, 62),
(71, 'Овочевий з сиром фета', '/uploads/products/0rs3xZDSL8MHhwRcTvrtuA3mVI8KwHCZjRPwlzLr.png', 'Листья салату, Огірок, Помідор, Перець болгарський, Сир фета, Маслини, Соняшникова олія, Цибуля синя, Базелік сушений', 120, 200, 62),
(72, 'Овочевий по-пекінськи', '/uploads/products/yz72gfJsldF4VmYycmDAGmAnQXgJtLY7NQ4YEsBa.png', 'Пекінська капуста, Морква терта, Огірок тертий, Перець болгарський, Соус для поке, Кінза, Кунжут', 85, 200, 62),
(73, 'Поке боул з креветкою', '/uploads/products/9o2BrFhiOmQKegMkGpYpO4qxoeNdWiepMUGoYQpd.png', 'Рис, Чука, Мікс салату, Креветка, Ананас, Помідор, Соус для поке, Кисло=солодкий соус, Сир філадельфія, Кунжут', 195, 300, 62),
(74, 'Поке боул з куркою', '/uploads/products/6uSp3IsnORc4z8q3TMHsHYLTIFrzAYeqbBJMLMfb.png', 'Рис, Курка фрі, Морква, Помідор, Кукурудза, Огірок, Соус для поке, Омлет японський, Соус часниковий, Кунжут', 145, 300, 62),
(75, 'Поке боул з лососем', '/uploads/products/IgL4z5AR3D3RcWbfw0DO9d6AQxx1RxeilkTfzd8l.png', 'Рис, Авокадо, Лосось, Огірок, Помідор, Сир філадельфія, Лист салату, Соус для поке, Соус унагі, Кунжут , Стружка норі', 175, 300, 62),
(76, 'Поке боул овочевий', '/uploads/products/6inTseHiIS4BWgCwsStsQwFPkW5pDjngjgBE46lZ.png', 'Рис, Огірок, Морква, Чука, Перець болгарський, Кукурудза, Горіховий соус, Соус для поке, Лимон, Чилі перець, Кунжут', 99, 300, 62),
(77, 'Салат з лососем і філадельфією', '/uploads/products/qzuOO58p4TJQg7NU23ieeX2Ttcq22UcwD3a6ZVjV.png', 'Мікс салату, Черрі, Лосось, Авокадо, Сир філадельфія, Арахіс, Соус для поке, Лимон, Кунжут', 210, 220, 62),
(78, 'Цезар з креветкою', '/uploads/products/mvxFWqaMJUGuYpWoOkaFBG4TCe0oTNSXBqoJDPdO.png', 'Айсберг, Яйце, Чері, Креветка королівська, соус цезар, сухарі, сир пармезан', 210, 220, 62),
(79, 'Цезар з куркою', '/uploads/products/skn3LwSY20IrcJzC9ba5DkFlkzethQUh9S78Pzop.png', 'Айсберг, Яйце, Помідор, Куряче філе, Соус цезар, Сухарі, Сир пармезан', 152, 220, 62),
(80, 'Чука з горіховим соусом', '/uploads/products/QBq7Gc6lzMc2WmCR5ypIVf4VzHXHTrfoyPohptpu.png', 'Водорості хіяші, Горіховий соус, Лимон, Кунжут, Листя салату', 75, 150, 62),
(81, 'Піца 4 сезона', '/uploads/products/BFHbliTSqCtfActfSvYCkfWwqo3lxUB5tawdEY5F.png', 'Бекон, Мисливські ковбаски, Печериці, Помідор, Сир твердий, Моцарелла, Цибуля зелена, Томатний соус', 225, 500, 63),
(82, 'Піца angry birds', '/uploads/products/T6QP2n7xaFtg5jJ67va4L8vC25K8UR7WJTNNrw6Y.png', 'Салямі, Маслини, Чеддер сир, Твердий сир, Моцарелла , Соус томатний', 199, 500, 63),
(83, 'Піца гавайська', '/uploads/products/f5xS5wj9G9x6oQCvAQ4haA91IrRRtudoAkKiQwvQ.png', 'Куряче філе, Шинка, Ананас, Моцарелла, Твердий сир, Вершковий соус.', 215, 500, 63),
(84, 'Піца два хіти', '/uploads/products/SWjHyRqLtUtk4CjwFKNEaqwkurF2dUq0NPaDrgLN.png', 'Пармезан, Дорблю, Твердий сир, Шинка, Мисливські ковбаски, Бекон, Маслини, Моцарелла, Вершковий соус', 245, 500, 63),
(85, 'Піца домашня', '/uploads/products/oS6B5COFp2VsZJD91WUZe4mOUglhN0biDQPC9L5a.png', 'Бекон, Шинка,Печериці, Цибуля, Помідор, Огірок маринований, Моцарелла, Сир твердий, Вершковий соус, Фірмовий соус з травами, Петрушка.', 220, 500, 63),
(86, 'Піца дьябло', '/uploads/products/FCRVPh5qQpEW7DTTo60334CMDhjAMf9aLczgOBAK.png', 'Салями, Мисливські ковбаски, Моцарелла , Перець болгарський, Перець чилі, Томатний соус гострий, Огірок солоний', 225, 500, 63),
(87, 'Піца м’ясна', '/uploads/products/w3PQTwW38SjZwxaCTIGhjFrzAN6U0AGqqPq6VJLp.png', 'Салямі, Бекон, Куряче філе, Ковбаски баварські, Помідор, Печериц, Моцарелла, Томатний соус', 245, 500, 63),
(88, 'Піца Маргарита', '/uploads/products/8Yu6HgdKr0VrB9CFc5fFpElLPfUvasjREx8CeT16.png', 'Моцарелла , Твердий сир, Помідор, Томатний соус, Петрушка', 165, 500, 63),
(89, 'Піца пепероні', '/uploads/products/U3gUuNetsbAOrnpgenAdaSBZ2BZQkzdUnmjFbdiN.png', 'Пеппероні гострі, Моцарелла , Твердий сир, Соус фірмовий вершковий.', 235, 500, 63),
(90, 'Піца царська', '/uploads/products/uSJPBvLzZngKQufZkE6yX5yVW9jFaszDCzQBsAxx.png', 'Салями, Бекон, Помідор, Маслини, Моцарелла, Томатний соус, Шрирача', 245, 500, 63),
(91, 'Піца цезар', '/uploads/products/2VAmow7B4t4ddQse5BNu0ZWctIhxzbCsJY4zxUJ4.png', 'Копчена куряча грудка, Айсберг, Помідор, Пармезан, Твердий сир, Моцарелла, Соус цезар, Соус вершковий фірмовий.', 215, 500, 63),
(92, 'Сирна піца', '/uploads/products/ktvHjPuvChSdxZIkoyZcmiItgcjRF9mQXHQiWT6B.png', 'Моцарелла , Дорблю , Філадельфія сир, Вершковий фірмовий соус, петрушка.', 195, 450, 63),
(93, 'Гостра паста з ковбасками', '/uploads/products/FtnvJmeXdRVHEwCqmuuwx3SqKuJMWzr24yJTvMCU.png', 'Олія соняшникова, Ковбаски, Помідор, Часник, Томатний соус, Соус шрірача, Локшина удон, Сіль, Перець чорний, Сир твердий, Петрушка, Чилі', 145, 300, 68),
(94, 'Курка теріякі з ананасами', '/uploads/products/N511NOXmrEirmVprckZzEmZ5xXEopdxxSS82NJyt.png', 'Куряче філе, Рис, Олія соняшникова, Цибуля, Морква, Ананас, Перець болгарський, Часник, Унагі соус, Фірмовий соус, Кунжут', 145, 350, 68),
(95, 'Паста Болоньєзе', '/uploads/products/Y1itmJm1iipYNaDbRWR2sTOKG29y74cCBPsogqgu.png', 'Локшина удон, Соняшникова олія, Соус томатний, Сир твердий, Часник, Сіль, Перець чорний, Петрушка, Фарш, Помідор', 145, 300, 68),
(96, 'Паста з куркою та грибами', '/uploads/products/NYliatdNa6AYLpIJD0ID9DP1x4y9ERxr6tRUCWHD.png', 'Куряче філе, Локшина удон, Гриби печериці, Вершковий соус, Часник, сіль, Чорний перець, Сир, Лимон, Олія соняшникова', 165, 300, 68),
(97, 'Паста з морепродуктами', '/uploads/products/isdHFN2U6xvFaKzkaq7tBtIduidAVuJcKcnjV79A.png', 'Олія соняшникова, Гриби печериці, Морський коктейль, Креветки королівські, Вершки, Локшина удон, Сіль, Перець чорний, Сир твердий, Лимон', 185, 300, 68),
(98, 'Паста карбонара', '/uploads/products/kFpoExLb87nmrcVR1wOyTfJcxAjFHDoDOYKK3dRk.png', 'Локшина удон, Бекон, Олія соняшникова, Часник, Вершковий соус, Яєчний жовток, Сир твердий, Сіль, Перець чорний.', 165, 300, 68),
(99, 'Скляна з морепродуктами', '/uploads/products/XrogKrsh5zNXLwzuigMo6TfYleYKoiSV7vpRAjt6.png', 'Олія соняшникова, Цибуля, Морква, Кабачок, Помідор, Морський коктейль, Часник, Соєвий соус, Солодкий чилі соус, Локшина скляна, Кунжут, Цибуля зелена, Лимон', 185, 300, 68),
(100, 'Скляна з яловичиною у тайському соусі', '/uploads/products/q28BwJGTZYcWyBjZGA7czjytzxRpMXbR6oUCZsX5.png', 'Олія соняшникова, Яловичина, Цибуля, Морква, Кабачок, Помідор, Часник, Соєвий соус, Солодкий чилі соус, Локшина скляна, Кунжут', 165, 320, 68),
(101, 'Соба з куркою унагі', '/uploads/products/OizOPJcLEpK65Y8EWztkyvEBnqYOsBFpxs81pSSv.png', 'Гречана локшина, Куряче філе, Цибуля, Морква, Олія соняшникова, Перець болгарський, Кабачок, Часник, Унагі соус, Кунжут, Кінза, Соєвий соус', 165, 320, 68),
(102, 'Соба з овочами', '/uploads/products/VxXH1TCqzCWXNZM5d680uYxjNnq9StkufW6aRajD.png', 'Олія соняшникова, Цибуля, Морква, Перець болгарський, Кабачок, Помідор, Пекінська капуста, Часник, Соєвий соус, Локшина гречана кунжут', 145, 320, 68),
(103, 'Гострий тяхан з морепродуктами та чилі', '/uploads/products/GNtE36sVQ3GyzPDb7uRYZtOzCVUpAPZsXvVe6prl.png', 'Олія соняшникова, Цибуля, Морква, Морський коктейль, Помідор, Перець болгарський, Часник, Кінза, Соєвий соус, Солодкий чилі соус, Рис, Кунжут, Цибуля зелена', 185, 320, 68),
(104, 'Тяхан зі свининою в тайському соусі', '/uploads/products/SrG5ezWfsEGvBBD1sTthK1oMg1nGtZDsiNTVGMmc.png', 'Рис, Свинина, Цибуля, Морква, Омлет, Олія соняшникова, Перець болгарський, Часник, Кінза, Кунжут, Цибуля зелена, Соус солодкий чилі, Соєвий соус', 165, 320, 68),
(105, 'Тяхан із креветкою', '/uploads/products/nozH6EF7j1KsK0XDq9sAsydmBWxldegaQMtPL4Se.png', 'Олія соняшникова, Креветка королівська, Цибуля, Морква, Омлет, Перець болгарський, Часник, Соєвий соус, Унагі соус, Рис, Кунжут, Лимон', 185, 320, 68),
(106, 'Тяхан овочевий', '/uploads/products/U9KXOWLqSPluQKjPzSIUeUwwjByo36RF89GdB2ZS.png', 'Цибуля, Морква, Гриби печериці, Пекінська капуста, Помідор, Перець болгарський, Часник, Кінза, Соєвий соус, Арахіс, Рис, Цибуля зелена', 145, 320, 68),
(107, 'Удон з куркою в тайському соусі', '/uploads/products/4aeytQM6uxrptTzBo8NrQ4Ek6b4CZMGHAqseTTMt.png', 'Локшина удон, Куряче філе, Цибуля, Морква, Ананас, Перець болгарський, Олія соняшникова, Часник, соус солодкий чилі, Соєвий соус, Кунжут, Цибуля зелена.', 145, 320, 68),
(108, 'Удон із яловичиною', '/uploads/products/kAQrZAaP3BwTWbkHSzWlGC8nPO2Ptu8EwLmpQF7h.png', 'Олія соняшникова, Яловичина, Цибуля, Морква, Кабачок, Перець болгарський, Часник, Кінза, Соєвий соус, Унагі соус, Локшина удон, Кунжут', 165, 320, 68),
(109, 'Гострий удон чилі зі свининою', '/uploads/products/pgrPZAf0bwKWtj2DiCdcE52eSINrWNIlSXAwrz29.png', 'Олія соняшникова, Свинина, Цибуля, Морква, Перець болгарський, Капуста пекінська, Соус ширачі, Кінза, Часник, Соєвий соус, Локшина удон, Кунжут, Перець чилі', 145, 320, 68),
(110, 'Bon-aqua  (газована)', '/uploads/products/fSUJRf4Eax81g8ZiHeZZhjwKBlhkO2d8soBLOfR7.png', 'Bon-aqua 0.5 л. (газована)', 25, 0.5, 64),
(111, 'Bon-aqua (газована)', '/uploads/products/vTdNeUbOgJSIaNpoed79kk80ISMUUCE3KHcVOisj.png', 'Bon-aqua (газована)', 35, 1, 64),
(112, 'Bon-aqua  (негазована)', '/uploads/products/H51Z0qz9rpDyhDp4k2vS91kTbLl8pkB8r2kn4kEq.png', 'Bon-aqua (негазована)', 35, 1, 64),
(113, 'Bon-aqua (негазована)', '/uploads/products/uPX0ZLpQrh3gvTYisp38xmROV6VoVjOLwhoEXcQE.webp', 'Bon-aqua (негазована)', 25, 0.5, 64),
(114, 'Coca-cola', '/uploads/products/GEFs0PZNFmOhkAqVuadcAPnFxcHbM2kupp7CH2Lu.png', 'Coca-cola 0.5л.', 35, 0.5, 64),
(115, 'Coca-cola', '/uploads/products/kYLA2ULR2fD9aFw9jIw39g1WP2PE9DcGbwID8OmG.png', 'Coca-cola 1 л.', 45, 1, 64),
(116, 'Coca-cola zero', '/uploads/products/MDk5lvN5VRjI3OBmNuVpBnECZsmKD9FKRx2sejK9.png', 'Coca-cola zero 0.5л.', 35, 0.5, 64),
(117, 'Fanta', '/uploads/products/xycV707ISlx8mRbfdsvIVjRLYTIIJJy0nAm5nUoy.jpg', 'Fanta 1 л.', 55, 1, 64),
(118, 'Fanta апельсин', '/uploads/products/zPg3Cr0HjWHJQOv3GjnceVpmwzYt1U2hpzDSGYDV.png', 'Fanta апельсин 0.5.', 35, 0.5, 64),
(119, 'Schwepps Lemon', '/uploads/products/OQCmSdYv5Ll4KlrUWlYg04t8MjWJKVRro0LvHClp.png', 'Schwepps Lemon 0.25 л.', 25, 0.25, 64),
(120, 'Schwepps mохіто', '/uploads/products/FdcVZ67zDhtsAmwuRMDaV8KEtdFlc388s1DDu2ju.png', 'Schwepps mохіто 0.25л.', 25, 0.25, 64),
(121, 'Sprite', '/uploads/products/0MQhFfPLsx4PZEl8MnGVSjQ92xvHzMqn06Q5Bdsw.png', 'Sprite 1 л.', 45, 1, 64),
(122, 'Sprite', '/uploads/products/509ReZCkAq7xe85F3Llu41XvH9KZgyYarCwdXh3g.png', 'Sprite 0.5 л.', 35, 0.5, 64),
(123, 'Сік Rich Екзотік', '/uploads/products/DjCqGtvxrvmNwjaP627GdkxW3PVqDuhTuPSpJl1S.png', 'Напій солодкий, на основі соку', 65, 1, 64),
(124, 'Сік апельсин', '/uploads/products/wB69AbFWPyf9ivxiOyp81xL1Ugvp4TzEBBEdDvRx.png', 'Напій солодкий, на основі соку', 65, 1, 64),
(125, 'Сік вишня', '/uploads/products/ouKtaWV8rNxqB4Y3PbVJ6EdMMIBc3ps5CL0HWfxe.png', 'Напій солодкий, на основі соку', 65, 1, 64),
(126, 'Сік томат', '/uploads/products/zoh3dBQKDEPVR8IU0dbsgVC1oGIoqXlgnX8rXDwA.png', 'Напій солодкий, на основі соку', 65, 1, 64),
(127, 'Бекон рол', '/uploads/products/Y3IWEBEzp7BiW8XnpS8X4DhhUyVRL76APkEeFB4p.png', 'Рис, Норі, Бекон, Сир філадельфія, Лист салату, Кріп, Кунжут білий', 129, 220, 61),
(128, 'Блек рол', '/uploads/products/xWZg1IxBT1BsU4yqCWdrJuGc1u8D90w6kPGa7zgw.png', 'Рис, Норі, Сніжний краб, Огірок, Японський омлет, Коктейльна креветка, Японський майонез, Кимчи соус, Кинза.', 179, 220, 61),
(129, 'Блек спайсі рол', '/uploads/products/pkvKi9YsOLbWU8sRAPtnSzVPGteqVIV6jaBWcIqn.png', 'Рис, Норі, Сир філадельфія, Огірок, Тунець,Сніжний краб, Ширачі, Лосось, Манго соус, Спайсі соус, Чилі перець', 375, 370, 61),
(130, 'Гункан авокадо сяке', '/uploads/products/icEYX9E8hvTpaBlWvtrp3Jmd2GrphtV9Vy1FSDia.png', 'Рис, Норі, Авокадо, Лосось', 45, 40, 61),
(131, 'Гункан з вугром', '/uploads/products/6vWnoVd69g9qMVdHPUAsLIxIv2oVvya0Jtie4uVC.png', 'Риc, Норі, Вугор, Соус спайсі', 52, 40, 61),
(132, 'Гункан з креветкою', '/uploads/products/cZ7T7IH4Fm8n7ZpoIeLbr0cMs0IRnqcrq7B9zZUz.png', 'Рис, Норі, Креветка, Японський майонез', 45, 40, 61),
(133, 'Гункан з лососем', '/uploads/products/czil3yyok6TjMH7TtRcWN8OeKM647MA8J6dT7Vbd.png', 'Рис, Норі, Соус спайсі, Лосось', 45, 40, 61),
(134, 'Гункан з мідією', '/uploads/products/9c2UGKkCoIDtyeHtIOVghKXNnHgPr0kMXvn1Aorq.png', 'Рис, Норі, Мідія, сСоус спайсі', 43, 40, 61),
(135, 'Гункан з окунем', '/uploads/products/5gFGrleTicjGAZh08wxuj2Yd2uMbyaNqcrRrTUqq.png', 'Рис, Норі, Окунь, Соус спайсі', 43, 40, 61),
(136, 'Гункан з тунцем', '/uploads/products/oASZk9jfpvNdXSiiFZsDl1kVgVMAaaPOQifwCtbF.png', 'Рис, Норі, Соус спайсі, Тунець', 45, 40, 61),
(137, 'Гункан кані', '/uploads/products/m8YANXrRok7w8li6pfDODKcQBj6impcD58SjegBC.png', 'Рис, Норі, Сніжний краб, Японський майонез', 43, 40, 61),
(138, 'Гункан капа з лососем', '/uploads/products/Cxa8XFhbJTErkztd2DWPPIfKCrj3lwIevKmZRr6X.png', 'Рис, Огірок, Лосось, Соус спайсі, Тобіко', 45, 40, 61),
(139, 'Гункан Унагі спайс', '/uploads/products/PAhb8mY4rS10lyXjtXIiLQsy7x6P1n68Phs0oJ2Z.png', 'Рис, Норі, Телапія смажена, Соус спайсі, Тобіко', 40, 40, 61),
(140, 'Гункан Філадельфія сяке', '/uploads/products/UqBxYXGId9EQpk82O6GCdtFekB9nYDiIRJloZ7Od.png', 'Рис, Норі, Лосось, Сир Філадельфія', 45, 40, 61),
(141, 'Гункан чука', '/uploads/products/ZFXdULS9CqeyCABVBHuK9UTFkswd0h3CJ44Z91nU.png', 'Рис, Норі, Чука, Горіховий соус, Кунжут', 39, 40, 61),
(142, 'Дракон рол', '/uploads/products/8e2tLDaCXIQHi9kQnu9lxTCjrqxH00ijw1NfFNrA.png', 'Рис, Норі, Лосось, Сир філадельфія, Ікра тобіко , Хіяші, Вугор, Унаги соус, Кунжут', 285, 240, 61),
(143, 'Ебі рол', '/uploads/products/dhRpmQnjELlbK2mGrDlxb38K6MM3h4sDxVftraVW.png', 'Рис, Норі, Коктейльна креветка, Авокадо, Лист салату, Тобіко ікра, Сир філадельфія, Соус манго', 169, 220, 61),
(144, 'Емі рол', '/uploads/products/POqPQNzjp0fKS16zN5YFyTX3KFvvlKcPjzM0bySM.png', 'Рис, Норі, Курка копчена, Філадельфія сир, Лист салату, Цибуля зелена, Тобіко чорна, Японський омлет, Соус унаги, Кунжут', 155, 200, 61),
(145, 'Італія рол', '/uploads/products/XKKZns1O2E7iQSFlDXOPz1dkXoUczdY7rlK830eG.png', 'Рис, Норі, Телапія сира, Лосось смажений, Помідор, Сир філадельфія, сир чедер, Японський майонез, Лук зелений', 152, 230, 61),
(146, 'Касадо рол', '/uploads/products/OV4EQWK9CazTabslSbidtKA07vVOWPbMAErqm4bd.png', 'Рис, Норі, Сніжний краб, Сир філадельфія, Огірок, Омлет/ Огірок , Лосось, Унаги соус, Кунжут', 173, 240, 61),
(147, 'Макі з авокадо', '/uploads/products/HBtBBozFald1yCKkWXhbzxuOBBDzSDILmgaaFemB.png', 'Рис, Норі, Авокадо', 81, 110, 61),
(148, 'Макі з вугром', '/uploads/products/7TmWSjaLzxR3bwVedXqnq7BOfyGqEeQFSmarI3Kp.png', 'Рис, Норі, Вугор, Огірок, Унагі соус, Кунжут', 125, 110, 61),
(149, 'Макі з креветкою', '/uploads/products/5AfuBXtBs8fIHab3cFzEozS7dpHrx9C2xIMLtNW3.png', 'Рис, Норі, Креветка, Огірок', 125, 110, 61),
(150, 'Макі з лососем', '/uploads/products/1wFuXbNwAsLjo80CxdgQRQnGiVX8KyIwA1KMdSLA.png', 'Рис, Норі, Лосось, Авокадо, Японський майонез', 120, 110, 61),
(151, 'Макі з огірком', '/uploads/products/DpqiOYY9Acdhzr28D5PR9PRc7BTyJpTk6rTagkQp.png', 'Рис, Норі, Огірок, Кунжут', 60, 110, 61),
(152, 'Макі з тунцем', '/uploads/products/XcQa1MSUvz6ir24kl5I9LmGGSfJMlBrUX4KCrdcc.png', 'Рис, Норі, Тунець', 145, 110, 61),
(153, 'Вегетаріанський сет', '/uploads/products/SndbuADCFnDJ8wY15QeT8J8P8wpJwWeUXZUBMC5Q.png', 'Мак Авокадо, Мак огірок, Мак ананас, Футомакі Овочевий, Чука-Ролл, Суші авокадо', 465, 550, 4),
(154, 'Гункан сет', '/uploads/products/AmQyFfFkvIBlpa442ZtZ9JANZXNG7lZoCT1xZUAd.png', 'Гункан з  крабом 2 шт, Гункан унаги 2 шт, Гункан лосось спайсі 2 шт, Гункан креветка 2шт', 475, 450, 4),
(155, 'Ізумі сет', '/uploads/products/VjZ1HmRqoRC8a586P7W4gugVas1cNHgvpLhhrA2R.png', 'Самурай рол в тобіко, Філадельфія з лососем, Чука рол, Італія рол, Каліфорнія чікен', 625, 1100, 4),
(156, 'Імперія сет', '/uploads/products/1bSNOyrrH98lhdUqtsSvUpmtN4SEjppHGYagMPR2.png', 'Філадельфія з лососем, Філадельфія з морським окунем, Емі рол, Самурай рол в тобіко, Мак з копченим лососем, Мак Огірок 2 шт , Мак з копченням лососем, Мак темпура спайсі,  Тайський рол, Ролл з тіла', 2745, 3300, 4),
(157, 'Каліфорнія сет', '/uploads/products/KWXSKnG0rjNSpnMPVAAX8HY8kDDv5YA26NqM3nbw.png', 'Каліфорнія з мідією, Самурай рол в червоній тобіко, Каліфорнія ебі, Каліфорнія унаги', 625, 800, 4),
(158, 'Кінг сет', '/uploads/products/Ve5o9wtr031GsE9Hx2lO4QOsnodyRJBSeuZvl93y.png', 'Філадельфія з лососем, Філадельфія з вугром, Самурай рол в тобіко, і Каліфорнія ЕБі', 1495, 1400, 4),
(159, 'Комбо сет', '/uploads/products/rjXn0L4ha3FMo7I3dY4vFjU88VvSOKxlDppBr8Dv.png', 'Макі Креветка, Чука Рол, Футомакі з грибами, Каліфорнія унагі, Філадельфія з окунем', 685, 1000, 4),
(160, 'Леіко сет', '/uploads/products/0S9WlXNMdfpyodFBPkBXav3pkcSU2CB5ZYLxMRud.png', 'Самурай рол в тобіко, Філадельфія з лососем, Каліфорнія з мідіями, Мак лосось, Мак огірок, Суші з лососем 2 шт', 834, 1000, 4),
(161, 'Макі сет', '/uploads/products/Jbyu70LQBDXtPNyS3otmkxzUkWyD00o7zc1JUe8T.png', 'Мак Лосось, Мак Креветка, Мак огірок, Мак з Морським окунем, Мак унаги, Мак мідії спайсі', 585, 900, 4),
(162, 'Маямі сет', '/uploads/products/6NCzEkIIoHiXRsh7rrzMnTVfwq9Rq5U54LEOmGdC.png', 'Емі рол, Філадельфія лайт, Тайський рол, Макі унаги, Макі з морським окунем', 654, 1000, 4),
(163, 'Міні-сет', '/uploads/products/IJ7T9KlecieNuoifshLJ6muhJRvGbwcKlFNmf6tN.png', 'Макі з креветками, Каліфорнія лайт, Суші з лососем, Гункан з крабом', 325, 350, 4),
(164, 'Набір Хіросіма', '/uploads/products/HlelTVLGvPxwgUnrUEmRILW6xodGQIyecdUY0Bks.png', 'Блек рол, Каліфорнія унаги, Мак унаги, Папрік рол, Фієста рол, Мак з огірком, Філадельфія з лососем, Філадельфія лайт, Емі рол, Футомакі хіяші, Темпура спайсі', 1825, 2100, 4),
(165, 'Намі сет', '/uploads/products/NDpm1UDA76k7FjIvdtNFYsD3itbn11MR6hQNQf9u.png', 'Філадельфія з лососем 2 шт,  Самурай рол в тобіко, Каліфорнія ебі в тобіко, Каліфорнія з крабом, Гункан с лососем спайсі-8 шт', 1350, 1300, 4),
(166, 'Наруто сет', '/uploads/products/jt27rsF3T17Pspl9xp3ABVOuH28h8u3LjpyAez0G.png', 'Філадельфія з лососем, Філадельфія з вугром, Мак Лосось, Самурай рол в тобіко', 725, 800, 4),
(167, 'Сет 24 Рола', '/uploads/products/xjfB8JlUKVOCH81bcYsb6O7lxfysZajPpwh0gz0E.png', 'Філадельфія з лососем, Філадельфія з морським окунем, Емі рол, Самурай рол в тобіко, Мак з копченим лососем, Мак Огірок 2 шт , Мак з копченням лососем, Мак темпура спайсі,  Тайський рол, Ролл з тілап', 3825, 5000, 4),
(168, 'Сет 24 Рола', '/uploads/products/QIq3dJLGp85gpXz8gdm5ABUys7V3nraYlPpgTbo1.png', 'Філадельфія з лососем, Філадельфія з морським окунем, Емі рол, Самурай рол в тобіко, Мак з копченим лососем, Мак Огірок 2 шт , Мак з копченням лососем, Мак темпура спайсі,  Тайський рол, Ролл з тілап', 3825, 5000, 4),
(169, 'Сет Аляска', '/uploads/products/MdBCML1zaIc1H4yrjdDaZgqCysOzrOx14ExPGAeN.png', 'Філадельфія з лососем, Каліфорнія з крабом, Гункан унагі спайсі-2 шт, Мак томаго, Мак з морським окунем', 786, 1000, 4),
(170, 'Сет сашимі Мікс', '/uploads/products/Z9Pxu9maQ4oSwTixEqbSYBszFYszoBwgiFWMackY.png', 'Вугор (кунжут, Унагі), креветка, лосось, окунь, рисова локшина, Чука, лимон', 465, 200, 4),
(171, 'Сет філадельфія L', '/uploads/products/D92eDggiMxKQz0NeTwifwYNIZOOHUl8wWsYlz9Bc.png', 'Філадельфія грін, Філадельфія вулкан, Гункан філа-лосось 2 шт.', 540, 550, 4),
(172, 'Сет філадельфія бум', '/uploads/products/V6sgspSu2L06gK2g234LnsX2Ci4nmaDbouVUXmca.png', 'Філадельфія бум рол, Філадельфія ебі, Самурай рол, Касадо рол, Ясай ролл', 591, 1200, 4),
(173, 'Суші сет', '/uploads/products/wU7tAB4lZvs383yXzsJ8M9KO77w91oJqhOP1XBqd.png', 'Суші з лососем 2 шт, Суші з окунем 2 шт, Суші з вугром 2 шт, Суші з тунцем 2 шт', 450, 450, 4),
(174, 'Темпура іті сет', '/uploads/products/FjI2qAkWMw8MgKTg3oEP3ey5aXGLC6Q1PC3kEcTU.png', 'Мак темпура спайсі, Темпура з морським окунем, Темпура чіз', 510, 500, 4),
(175, 'Темпура сет', '/uploads/products/k7XFXoh6rC5B7AOLQiK0BVKIFC5JKtCARgSCWayv.png', 'Мак темпура спайсі, Темпура з лососем, Темпура Чиз, Темпура Ебі', 595, 800, 4),
(176, 'Токусіма набір', '/uploads/products/hC2dWwn7E9QCu2QmuIDRfxC05Ghzd3toupDfuQAs.png', 'Самурай рол в тобіко, Філадельфія лайт, Папрік рол, Мак лосось, Мак огірок, Мак томаго, суші лосось 2 шт, суші окунь 2 шт, гункан краб 2 шт, гункан унагі 2 шт.', 925, 1100, 4),
(177, 'Филадельфия хіт сет', '/uploads/products/H5hRtmHomvezndkIzd4cBlOBfPppRG0nk58zpa8J.jpg', 'Філадельфія з лососем, Філадельфія з вугром, Філадельфія з морським окунем, Ясай рол, Нагасаки рол', 899, 1200, 4),
(178, 'Філа та лосось сет', '/uploads/products/l6JWLNDNJEpzTHJ78XRhMuTnR95LEZ81VTcenlwI.png', 'Філадельфія лайт рол, Футомак лосось гриль, Рол три сири, Вулкан лосось рол', 599, 1000, 4),
(179, 'Філадельфія дует сет', '/uploads/products/AyMr3uQZfIPDzSTnbdyFSzx3Zq1MF2NITakkwgO9.png', 'Філадельфія з лососем, Самурай рол в тобіко, Гункан філадельфія 2 шт', 450, 550, 4),
(180, 'Філадельфія сет', '/uploads/products/V8P8NqyLY0ekOAkjHBNitPpG4klL4fJpBVofRjRS.png', 'Філадельфія з лососем, Хару рол, Каліфорнія ебі в тобіко, Ясай рол', 625, 900, 4),
(181, 'Фортуна сет', '/uploads/products/KuIBqdaLZEdebu3hLDwlc0HfOfrJ0pBX7AFi7zjC.png', 'Каліфорнія чікен, Ролл з тилапією унаги, Фієста рол, Футомакі Хіяші, Філадельфія лайт', 725, 1100, 4),
(182, 'Фуджі сет', '/uploads/products/KUgyewcz4D3ESrlj50GJ9OORhCDx9VelrZErFDOB.png', 'Каліфорнія лайт, Фудзіяма рол, Фієста рол, Філадельфія лайт, Гункан з крабом 2шт', 597, 1000, 4),
(183, 'Ямі-Ямі сет', '/uploads/products/oolDTO67CqraceVblJmjd5eRRyY5QYIa5oiS5ShC.png', 'Касадо рол, Ебі Ролл, Гункан з крабом 2 шт.', 425, 550, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `role`) VALUES
(1, 'Artem', 'artlevchenko2@gmail.com', '2022-11-01 14:26:28', '$2y$10$1QuQah1mKuyeeOpUNB0lbuqOkSwfYl0s19K6qAQ03CxvW8YcFQ9Aa', 'vgruRwUHzI', '2022-11-01 14:26:28', '2022-11-01 14:26:28', 'admin'),
(3, 'Den', 'artlevchenko3@gmail.com', NULL, '$2y$10$BhOIWzZ4LS/3rq5FzFcKretuEWYTw8WyMnggvF7j6o8p4ULotMPf.', NULL, '2022-11-03 16:03:52', '2022-11-03 16:03:52', ''),
(5, 'armen', 'armen3@gmail.com', NULL, '$2y$10$ISveZAxsZmCGpHivoOuPNe0PTx5mgBlzv8SDQ3lbwKu6xpaVT.r0q', NULL, '2022-11-03 16:12:18', '2022-11-03 16:12:18', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `galleries_product_id_foreign` (`product_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_order_id_foreign` (`order_id`),
  ADD KEY `order_items_product_id_foreign` (`product_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=184;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `galleries`
--
ALTER TABLE `galleries`
  ADD CONSTRAINT `galleries_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
