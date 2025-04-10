{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww28600\viewh14680\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function searchHormones() \{\
  let input = document.getElementById("searchInput").value.toLowerCase();\
  let hormones = document.querySelectorAll(".hormone");\
\
  hormones.forEach(function(hormone) \{\
    let name = hormone.querySelector("h2").textContent.toLowerCase();\
    if (name.includes(input)) \{\
      hormone.style.display = "block";\
    \} else \{\
      hormone.style.display = "none";\
    \}\
  \});\
\}\
}