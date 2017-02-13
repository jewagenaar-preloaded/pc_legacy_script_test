varying vec4 vNormal;

void main(void)
{
    // 0 -> 1 rather than -1 -> 1
    vec3 light = vec3(0.5, 0.2, 1.0);
      
    // ensure it's normalized
    light = normalize(light);
  
    // calculate the dot product of
    // the light to the vertex normal
    float dProd = max(0.0, dot(vNormal.xyz, light));
  
    // feed into our frag colour
    gl_FragColor = vec4(dProd, dProd, dProd, 1.0);
}   